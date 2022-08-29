import colors from "../colors"; 

export const singleValueSelect = {
  option: (provided, state) => ({
    ...provided,
    borderLeft: `2px solid ${colors.white}`,
    backgroundColor: state.isFocused && 'transparent',
    color: state.isFocused && colors.black,
    cursor: 'pointer',
    fontSize: '20px',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&:hover': {
      color: colors.secondary,
      borderColor: colors.black,
      backgroundColor: 'transparent'
    }
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '20px',
    color: colors.greyLight,
  }),
  control: (provided, state) => ({
    ...provided,
    padding: '13px 5px',
    border: `3px solid ${colors.greyLighter}`,
    borderRadius: '5px',
    borderColor: colors.greyLighter,
    boxShadow: 'none',

    '&:hover': {
      borderColor: colors.greyLighter,
      cursor: 'pointer',
    },

    '&.error': {
      borderColor: colors.red,
    },
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '20px',
    color: colors.black,
    textTransform: 'capitalize'
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: colors.white,
    margin: '1px 0',
    overflow: 'hidden'
  }),
  menuList: provided => ({
    ...provided,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  clearIndicator: provided => ({
    ...provided,
    color: colors.black,
    padding: '8px 5px',

    '&:hover': {
      color: colors.secondary,
      cursor: 'pointer'
    }
  }),
  dropdownIndicator: (provided, { selectProps: { menuIsOpen } }) => ({
    ...provided,
    color: colors.black,
    transform: menuIsOpen && 'rotate(180deg)',
    padding: '8px 5px',
    '& svg path': {
      fill: menuIsOpen && colors.secondary,
    },
    '&:hover': {
      color: colors.secondary,
      cursor: 'pointer'
    }
  })
};
