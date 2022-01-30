import "./index.less"
export default {
  name: 'iTable',
  props: {
    datas: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  render() {
    return (
      <table border="1" width="100%" cellpadding="6" cellspacing="0" >
        <colgroup>
          {this.columns.map(column => <col width={column.width}></col>)}
        </colgroup>
        <tr>
          {this.columns.map(column => <th style={column.style}>{column.lable}</th>)}
        </tr>
        {this.datas.map(data => <tr>{this.columns.map(column => <td style={column.style}>{data[column.prop]}</td>)}</tr>)}
      </table >
    )
  }
}