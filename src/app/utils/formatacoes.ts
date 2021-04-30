export default class Formatacoes {
  static formatarData(data: any) {
    if (data) {
      if (data.indexOf('/') > -1) {
        return data;
      } else {
        let dataFormatada = new Date(data);
        return dataFormatada.toLocaleDateString();
      }
    }
  }
}
