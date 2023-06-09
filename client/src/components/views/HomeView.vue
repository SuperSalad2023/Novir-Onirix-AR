<template>
    <div class="layout">
        <div v-if="ihEvent">
            <div class="event" style="padding-top: 60px;">

                <p style="color:#396cab !important;">Welcome to</p>
                <h1 style="color:#396cab !important;">{{ihEvent.name}}</h1>
                <p  class="event__subtitle" style="color:#396cab !important;">Find the hidden QR codes, unlock and collect all the items</p>
            </div>
            <img class="event__logo" alt="Event logo" :src="ihEvent.logoUrl" />
            <button class="link">
                <span style="color:#396cab !important;"  @click="howToPlayOpen = true">How to play</span>
            </button>
        </div>
        <div v-if="ihEvent" class="footer">
            <button @click="$router.push({name: 'register'})">
                Create account to play
            </button>
            <p style="color:#396cab !important;">Already have an account? <router-link style="color:#396cab !important;" to="/login">Login here</router-link></p>
        </div>
    </div>
    <HowToPlayView :open="howToPlayOpen" :showFoot="false" @close="howToPlayOpen = false" ></HowToPlayView>
</template>
<script>
import HowToPlayView from "./HowToPlayView.vue";
import firebaseService from "../../services/firebase.service";
import analyticsService from '../../services/analytics.service';

export default {
    name: 'HomeView',
    components: {
        HowToPlayView
    },
    data() {
        return {
            ihEvent: null,
            howToPlayOpen: false
        }
    },
    created() {
        analyticsService.sendEvent('no_auth_view', {});
        firebaseService.getEvent()
            .then( ihEvent => {
                this.ihEvent = ihEvent;
            }).catch( error => {
                console.error(error);
            });
    }
}

</script>
<style scoped lang="scss">

.layout--game.open {
    top: 0vh !important;
}

.layout {
    color: var(--color-font-light);
    background-image: url(../../assets/welcome-bg.jpg);
    background-position: center;
    background-size: cover;
    & > div {
        text-align: center;
        align-items: center;
    }
}

.logo {
    width: 161.3px;
    height: 44px;
    margin-top: 51px;
    margin-bottom: 53px;
}

.event {
    & > * {
        margin: 0px 0px 20px 0px;
    }
    & > *:last-child {
        margin-bottom: 0px;
    }
    .event__subtitle {
        font-family: Lato;
        font-size: 15px;
    }
}
.event__logo {
    height: 120px;
  //  background-color: rgba(255, 255, 255, 0.87);
    margin-bottom: 27px;
}

.footer {
    margin: 36px 0 38px 0;
    a {
        color: var(--color-font-light);
    }
}

</style>