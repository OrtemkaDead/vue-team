<template>
  <div>
    <Header>
      <template v-slot:left>
        <BackArr></BackArr>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <WelcomeText>
        <template v-slot:title>
          <Title>Твой выбор</Title>
        </template>
      </WelcomeText>

      <div class="liked">

        <div class="liked__item">
          <Gamer>
            <template v-slot:icon-liked>
              <gamepad-icon class="icon-liked"/>
            </template>
          </Gamer>
        </div>

        <div class="liked__item">
          <Gamer>
            <template v-slot:icon-liked>
              <gamepad-icon class="icon-liked"/>
            </template>
          </Gamer>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import BackArr from '@/components/BackArr.vue'
    import WelcomeText from '@/components/WelcomeText.vue'
    import Avatar36 from '@/components/avatar/Avatar36.vue'
    import Title from '@/components/text/Title.vue'
    import Gamer from '@/components/Gamer.vue'

    //Icon
    import gamepadIcon from '@/assets/img/gamepad-icon.svg'

    export default {
        components: {
            Header, WelcomeText, Avatar36, Gamer, Title, BackArr,

            gamepadIcon,
        },
        mounted() {
            // Swiper
            var wrapper = document.querySelector('.liked');
            var elementWidth = document.querySelector('.liked__item').clientWidth;
            var i = 0;
            const items = document.querySelectorAll(".liked__item");

            function scrollTo(e) {
                wrapper.scroll({
                    top: 0,
                    left: e,
                    behavior: 'smooth'
                })
            }

            var initialPoint;
            var finalPoint;
            wrapper.addEventListener('touchstart', function (event) {
                initialPoint = event.changedTouches[0];
            }, false);
            wrapper.addEventListener('touchend', function (event) {
                finalPoint = event.changedTouches[0];
                var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
                var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
                if (xAbs > 20 || yAbs > 20) {
                    if (xAbs > yAbs) {
                        if (finalPoint.pageX < initialPoint.pageX) {
                            /*СВАЙП ВЛЕВО*/
                            if (i < items.length - 1) {
                                i++;
                                scrollTo((elementWidth + 24) * i);
                            }
                        }
                        else {
                            /*СВАЙП ВПРАВО*/
                            if (i == 0) { }
                            else {
                                i--;
                                scrollTo((elementWidth + 24) * i);
                            }
                        }
                    }
                }
            }, false);
        },
    }
</script>

<style lang="scss" scoped>
  .content {
    @include pos-fixed($head-h, $nav-h, unset);
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 $main-p;
  }

  .gamers {
    min-width: 100%;
    margin-right: 24px;
  }

  .liked {
    display: flex;
    overflow-x: auto;
    // запрещает скролл
    overflow: hidden;
    height: 100%;

    &__item {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      min-width: 100%;
      margin-right: 24px;
    }
  }

  .icon-liked {
    position: absolute;
    top: 16px;
    right: 16px;
    fill: #6476CC;
  }
</style>