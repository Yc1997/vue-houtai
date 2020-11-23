import Vue from 'vue'
import { Form, Input, FormItem, Button, Icon, Message, Container, Header, Aside, Main, Menu, MenuItem, MenuItemGroup, Submenu, Card, Breadcrumb, BreadcrumbItem, Col, Row, Table, TableColumn, Switch, Pagination, Tooltip, Dialog, MessageBox } from 'element-ui'

Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
