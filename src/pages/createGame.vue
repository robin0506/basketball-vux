<template>
  <div>
    <group title="新建房间">
      <x-input title="密码" keyboard="number" placeholder="请输入密码" :max="4" v-model="password"></x-input>
    </group>
    <group>
      <x-button type="primary" @click.native="createRoom">创建</x-button>
    </group>
  </div>
</template>

<script>
  import { XInput, XButton, Group } from 'vux'

  export default {
    mounted () {
      this.query = this.$route.query
    },
    components: {
      XInput,
      XButton,
      Group
    },
    data () {
      return {
        password: '',
        query: {}
      }
    },
    methods: {
      createRoom () {
//        let self = this
//        alert('create')
        this.$http({
          method: 'post',
          url: '/match/creatematch.do',
          data: {matchpasswd: this.password, userid: this.query.userid}
        }).then((res) => {
          console.log(res)
          if (res.status === 200) {
            if (res.data.success) {
              this.$router.push({path: '/beforeGame/' + res.data.matchid})
            }
          }
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>

<style>

</style>
