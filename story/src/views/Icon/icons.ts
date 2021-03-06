import { IFields } from '@/components/TableProps/types'

const icons: string[] = [
  'caidan',
  'jiazai',
  'shangla',
  'xiala',
  'milk-tea',
  'orange',
  'pear',
  'baseballBall',
  'water-cup',
  'ice-tea',
  'ice-drink',
  'sunrise',
  'soccer',
  'sunny',
  'lightning',
  'coffee',
  'cloudy',
  'basketball',
  'football',
  'remove-outline',
  'camera',
  'delete-solid',
  'zoomin',
  'star-off',
  'eleme',
  'zoomout',
  'ice-cream-square',
  'phone-outline',
  's-help',
  's-tools',
  'lollipop',
  'goods',
  'platform-eleme',
  'camera-solid',
  'ice-cream-round',
  'goods',
  'remove',
  'user-solid',
  'star-on',
  'help',
  'doubletop',
  'doublebottom',
  'PDF',
  'form',
  'edit',
  'education',
  'excel',
  'example',
  'exit',
  'dashboard',
  'drag',
  'component',
  'documentation',
  'i404',
  'BarChart',
  'bug',
  'clipboard',
  'confirm',
  'Openeyes',
  'close-eye',
  'eye',
  'close-circular',
  'search',
  'date',
  'warning',
  'close',
  'loading',
  'info',
  'danger',
  'success',
  'right-dobule',
  'left-dobule',
  'left',
  'down',
  'home',
  'right',
  'top',
  'head',
  'shoppingCart',
  'qq',
  'nav',
  'yooxi',
  'jinggao'
]

const iconFields: IFields[] = [
  {
    field: 'size',
    desc: '表示icon大小',
    type: '[Number, String]',
    defaultValue: '16'
  },
  {
    field: 'color',
    desc: '表示icon颜色',
    type: 'String',
    defaultValue: 'black'
  },
  {
    field: 'type',
    desc: '表示icon类型',
    type: 'String',
    defaultValue: '-'
  }
]

export { iconFields }

export default icons
