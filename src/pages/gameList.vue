<template>
  <div>
  <ul class="game-list">
    <li class="game-item" v-for="(item,index) in lists">
        <img class="portrait" :src=item.portrait alt="头像" height="100" width="100">
        <div class="info">
          <p class="room-name">{{item.roomName}}</p>
          <p class="status">{{item.status}}</p>
          <x-button type="primary" @click.native = "checkPassword(item.id)">join</x-button>
        </div>
    </li>
  </ul>


    <div v-transfer-dom>
      <confirm v-model="show"
               show-input
               title="请输入密码"
               @on-cancel="onCancel"
               @on-confirm="onConfirm">
      </confirm>
    </div>
  </div>
</template>

<script>

  import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
  export default {
    mounted () {
      this.getData()
    },
    directives: {
      TransferDom
    },
    components: {
      Confirm,
      Group,
      XSwitch,
      XButton
    },
    data () {
      return {
        show: false,
        msg: 'test',
        lists: [
          {
            id: 1,
            portrait: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg',
            roomName: '房间1',
            status: '进行中'
          },
          {
            id: 2,
            portrait: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg',
            roomName: '房间2',
            status: '进行中'
          },
          {
            id: 3,
            portrait: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg',
            roomName: '房间3',
            status: '进行中'
          }
        ]
      }
    },
    methods: {
      getData () {
        this.$http({
          method: 'get',
          url: '/match/findmatch'
//          url: 'https://cnodejs.org/api/v1/topics'
        }).then((res) => {
          console.log(0, res.status)
          if (res.status === 200) {
            console.log(11)
            this.dealData(res.data && res.data.data)
          }
        }).catch((e) => {
          console.warn(e)
        })
      },
      onCancel () {
        console.log('cancel')
      },
      onConfirm () {
        console.log('confirm')
      },
      checkPassword (id) {
        console.log(id)
        this.show = true
      },
      dealData (data) {
        if (!data) return
//        console.log(1111)
        this.lists = data
      }
    }

  }
</script>

<style lang="less">
  .game-list{
  }
  .game-item{
    padding:10px 20px;
    border-bottom:1px solid #3f3f3f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .portrait{
      border-radius:2px;
    }
    .info{
      margin-left:20px;
      flex:1;
    }
  }
</style>
