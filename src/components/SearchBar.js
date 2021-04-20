import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const[term, setTerm] = useState('');

    const onSubmit = event =>{
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" 
                    value={term}
                    onChange={(event) => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    )
};

//----------Same with class component===========
// class SearchBar extends React.Component {
//     state = { searchtTerm: '' };
//     onInputChange = (event) => {
//         this.setState({ searchtTerm: event.target.value });
//     }
//     onFormSubmit = event =>{
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.searchtTerm);
//     }
//     render(){
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" 
//                         value={this.state.searchtTerm}
//                         onChange={this.onInputChange} />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default SearchBar;