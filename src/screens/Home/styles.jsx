import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: "#232F3E",
  },
  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primeLogoImg: {
    width: 180,
    height: 35,
    resizeMode: 'contain'
  },
  amazonLogoImg: {
    width: 196,
    height: 78,
    marginTop: -32,
    resizeMode: 'contain',
    marginLeft: 30,
  },
  categoria: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 15,
  },
  categoriaTexto: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
  },
  contentLista:{

  },
  filmeImagemThumb: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  filmeImagem: {
    width: '100%',
    height: 190,
  },
  filmeTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 15,
    paddingLeft: 15
  },
  containerCards: {
    width: 300,
    height: 80,
  },
  containerImg: {
    width: 300,
    height: 80,
  },
});