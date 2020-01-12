const styles = theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0px !important" : undefined
    }
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  }
});

export default styles;
