
import './swiper.css'

enum Direction {Vertical, Horizontal}

interface SwiperOptions {
  container: any,
  direction: string
}

class Swiper {
  static SENSITIVITY_THRESHOLD: number = 120
  static SPEED_THRESHOLD: number = 0.36

  public options: any

  private $el: HTMLElement
  private direction: Direction
  private currentIndex: number
  private maxIndex: number

  private viewWidth: number
  private viewHeight: number

  constructor(options: SwiperOptions) {
    this.options = options
    this.$el = options.container.querySelector('.swiper')
    this.direction = options.direction === 'horizontal' ? Direction.Horizontal : Direction.Vertical

    this.currentIndex = 0
    this.maxIndex = this.$el.children.length - 1
    this.viewWidth = window.innerWidth
    this.viewHeight = window.innerHeight

    if (this.direction === Direction.Vertical) {
      this.$el.style.flexDirection = 'column'
    }
    
    this.initEvent()
  }

  initEvent(): any {
    let startX: number,
        startY: number,
        x: number,
        y: number,
        dx: number,
        dy: number,
        endX: number,
        endY: number,
        startTime: number,
        endTime: number

    this.$el.addEventListener('touchstart', (e: any) => {
      this.$el.style.transition = ''

      startTime = Date.now()
      startX = e.changedTouches[0].pageX
      startY = e.changedTouches[0].pageY
    })

    this.$el.addEventListener('touchmove', (e: any) => {

      x = e.changedTouches[0].pageX
      y = e.changedTouches[0].pageY
      dx = x - startX
      dy = y - startY

      this.transformToXY(dx, dy)

    })

    this.$el.addEventListener('touchend', (e: any) => {

      endTime = Date.now()
      endX = e.changedTouches[0].pageX
      endY = e.changedTouches[0].pageY

      let dt = endTime - startTime
      let dy = endY - startY
      let dx = endX - startX
      let speed: number

      if (this.direction === Direction.Horizontal) {
        speed = dx / dt
        if ((speed > Swiper.SPEED_THRESHOLD || dx > Swiper.SENSITIVITY_THRESHOLD) && this.currentIndex > 0) {
          this.currentIndex--
        } else if ((speed < -Swiper.SPEED_THRESHOLD || dx < -Swiper.SENSITIVITY_THRESHOLD) && this.currentIndex < this.maxIndex) {
          this.currentIndex++
        }
      } else if (this.direction === Direction.Vertical) {
        speed = dy / dt
        if ((speed > Swiper.SPEED_THRESHOLD || dy > Swiper.SENSITIVITY_THRESHOLD) && this.currentIndex > 0) {
          this.currentIndex--
        } else if ((speed < -Swiper.SPEED_THRESHOLD || dy < -Swiper.SENSITIVITY_THRESHOLD) && this.currentIndex < this.maxIndex) {
          this.currentIndex++
        }
      }
      
      this.transformToView(this.currentIndex)
    })
  }

  transformTo(pos: number): any {
    if (this.direction === Direction.Horizontal) {
      this.$el.style.transform = 'translateX(' + pos + 'px)'
    } else if (this.direction === Direction.Vertical) {
      this.$el.style.transform = 'translateY(' + pos + 'px)'
    }
  }

  transformToXY(dx: number, dy: number): any {
    if (this.direction === Direction.Horizontal) {
      this.transformTo(this.viewWidth * -this.currentIndex + dx)
    } else if (this.direction === Direction.Vertical) {
      this.transformTo(this.viewHeight * -this.currentIndex + dy)
    }
  }

  transformToView(currentIndex: number) {
    this.$el.style.transition = 'all .3s'

    if (this.direction === Direction.Horizontal) {
      this.transformTo(this.viewWidth * -this.currentIndex)
    } else if (this.direction === Direction.Vertical) {
      this.transformTo(this.viewHeight * -this.currentIndex)
    }

  }
}

export default Swiper
