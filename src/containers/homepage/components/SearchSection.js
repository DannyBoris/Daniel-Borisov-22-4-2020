import React from 'react'
import { makeStyles, TextField, Tooltip, Typography } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { getFlagIcon } from '../../../services/constants'
const useStyles = makeStyles(theme => ({
	root: {},
	optionContainer: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}))
const SearchSection = ({ setQuery, handleSubmit, locations }) => {
	const classes = useStyles()
	return (
		<form onSubmit={handleSubmit}>
			<Autocomplete
				id="country-select-demo"
				options={locations || []}
				autoHighlight
				onChange={(e, value) => handleSubmit(e, value)}
				getOptionLabel={option => option.LocalizedName}
				renderOption={option => (
					<div className={classes.optionContainer}>
						<Typography variant="body1">{option.LocalizedName}</Typography>
						<Tooltip title={option.Country.LocalizedName}>
							<img alt="flag" src={`${getFlagIcon(option.Country.ID.toLowerCase())}`} />
						</Tooltip>
					</div>
				)}
				renderInput={params => (
					<TextField
						{...params}
						onChange={e => setQuery(e.target.value)}
						placeholder="Choose a city"
						variant="outlined"
						inputProps={{
							...params.inputProps,
						}}
					/>
				)}
			/>
		</form>
	)
}

export default SearchSection
