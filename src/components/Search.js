import React from 'react'

function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
				onChange={handleInput}
                onKeyPress={search}
			/>
            <button className="btn btn-success" onChange={handleInput} onClick={search}>Search</button>
		</section>
	)
}

export default Search