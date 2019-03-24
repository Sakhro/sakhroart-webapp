import cn from "classnames";
import React, { PureComponent } from "react";
import { Link } from "server/i18n";

import c from "./Card.scss";

interface IProps {
  offset?: number;
  duration?: number;
  delay?: number;
  primaryImg: string;
  secondaryImg: string;
  title: string;
  link: string;
  animateOnce?: boolean;
  initiallyVisible?: boolean;
  animatePreScroll?: boolean;
  afterAnimatedIn?: any;
  setActive?: (key: string) => void;
}

interface IState {
  classes: string;
}

export class Card extends PureComponent<IProps, IState> {
  public static defaultProps: IProps;
  public state = {
    classes: "animated",
  };
  private visibility = {
    onScreen: false,
    inViewport: false,
  };
  private scrollableParent: Window;
  private animating: boolean;
  private delayedAnimationTimeout: any;
  private callbackTimeout: any;
  private node: any;

  public componentDidMount() {
    this.scrollableParent = window;

    if (this.scrollableParent && this.scrollableParent.addEventListener) {
      this.scrollableParent.addEventListener("scroll", this.handleScroll);
    }

    if (this.props.animatePreScroll) {
      this.handleScroll();
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.delayedAnimationTimeout);
    clearTimeout(this.callbackTimeout);

    if (window && window.removeEventListener) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  public render() {
    const { classes } = this.state;
    const { primaryImg, secondaryImg, title, link } = this.props;

    return (
      <article
        ref={this.handleRef}
        className={cn(c.imgs, classes)}
      >
        <Link href={link}>
          <a>
            <img
              className={cn(c.card, c.topImg)}
              src={primaryImg}
            />
            <img
              className={cn(c.card, c.bottomImg)}
              src={secondaryImg}
            />

            <div className={c.titleWrapper}>
              <h2 className={c.title}>
                {title}
              </h2>
            </div>
          </a>
        </Link>
      </article>
    );
  }

  private getElementTop = (elm) => {
    let yPos = 0;

    while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
      yPos += (elm.offsetTop + elm.clientTop);
      elm = elm.offsetParent;
    }

    return yPos;
  }

  private getScrollPos = () => {
    if (this.scrollableParent.pageYOffset !== undefined) {
      return this.scrollableParent.pageYOffset;
    }

    return this.scrollableParent.scrollTop;
  }

  private getScrollableParentHeight = () => {
    if (this.scrollableParent.innerHeight !== undefined) {
      return this.scrollableParent.innerHeight;
    }

    return this.scrollableParent.clientHeight;
  }

  private getViewportTop = () => this.getScrollPos() + this.props.offset;

  private getViewportBottom = () => this.getScrollPos() + this.getScrollableParentHeight() - this.props.offset;

  private isInViewport = (y) => y >= this.getViewportTop() && y <= this.getViewportBottom();

  private isAboveViewport = (y) => y < this.getViewportTop();

  private isBelowViewport = (y) => y > this.getViewportBottom();

  private inViewport = (elementTop, elementBottom) => this.isInViewport(elementTop)
    || this.isInViewport(elementBottom)
    || (this.isAboveViewport(elementTop) && this.isBelowViewport(elementBottom))

  private onScreen = (elementTop, elementBottom) =>
    !this.isAboveScreen(elementBottom)
    && !this.isBelowScreen(elementTop)

  private isAboveScreen = (y) => y < this.getScrollPos();

  private isBelowScreen = (y) => y > this.getScrollPos() + this.getScrollableParentHeight();

  private getVisibility = () => {
    const elementTop = this.getElementTop(this.node) - this.getElementTop(this.scrollableParent);
    const elementBottom = elementTop + this.node.clientHeight;

    return {
      inViewport: this.inViewport(elementTop, elementBottom),
      onScreen: this.onScreen(elementTop, elementBottom),
    };
  }

  private visibilityHasChanged = (previousVis, currentVis) =>
    previousVis.inViewport !== currentVis.inViewport
    || previousVis.onScreen !== currentVis.onScreen

  private animate = (animation, callback) => {
    this.delayedAnimationTimeout = setTimeout(() => {
      this.animating = true;

      this.setState({
        classes: `animated ${animation}`,
      });

      this.callbackTimeout = setTimeout(callback, this.props.duration * 1000);
    }, this.props.delay);
  }

  private animateIn = (callback) => {
    const { setActive, title } = this.props;

    setActive(title);

    this.animate(c.animateIn, () => {
      if (!this.props.animateOnce) {
        this.animating = false;
      }

      const vis = this.getVisibility();

      if (callback) {
        callback(vis);
      }
    });
  }

  private handleScroll = () => {
    if (this.animating) {
      return;
    }

    const currentVis = this.getVisibility();

    if (!this.visibilityHasChanged(this.visibility, currentVis)) {
      return;
    }

    clearTimeout(this.delayedAnimationTimeout);

    if (currentVis.inViewport) {
      this.animateIn(this.props.afterAnimatedIn);
    }

    this.visibility = currentVis;
  }

  private handleRef = (ref) => {
    if (!this.node) {
      this.node = ref;
    }
  }
}

Card.defaultProps = {
  title: "",
  link: "",
  secondaryImgSrc: "",
  primaryImgSrc: "",
  delay: 0,
  offset: 150,
  duration: 1,
  animateOnce: false,
  initiallyVisible: true,
  animatePreScroll: true,
};
