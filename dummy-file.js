if (typeof (row) === 'string') {
      return (
        <Grid key={i}>
          <Divider className={classes.divider} />
            <Typography>
              { row }
            </Typography>
        </Grid>
      )
    }

    if (row.constructor === Array) {
      return row.map((item, index) => (
        <Grid key={index}>
          { this.getItem(item, formProps) }
        </Grid>
      ))
    }

    return (
      <Grid key={i}>
        { this.getItem(row, formProps) }
      </Grid>
    )
  };
