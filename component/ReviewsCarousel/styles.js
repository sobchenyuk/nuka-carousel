import {_decript_color, _title_color} from "../../../../../Theme/styles";

const styles = {
  reviews_content: {
    maxHeight: 300,
    display: 'flex',
    flexDirection: 'column',
  },
  reviews_h: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: 2,
    color: _title_color,
  },
  reviews_p: {
    fontSize: 24,
    lineHeight: 1.5,
    fontStyle: 'italic',
    color: _decript_color,
  },
  reviews_name: {
    marginTop: 'auto',
    display: 'block',
  }
};

export { styles };
