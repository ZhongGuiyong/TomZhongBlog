// 获取格式为YYYY-MM-DD格式的日子
export const getYYMMDD = (dateVal) =>{
    const da = new Date(dateVal);
    const year = da.getFullYear() + '年';
    const month = da.getMonth() + 1 + '月';
    const date = da.getDate() + '日';
    // console.log([year,month,date].join('-'));
    return [year,month,date].join('')
}

export default {
  getYYMMDD
}