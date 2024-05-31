import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header';
import CardList from './CardList';
import { getData } from './data';

import './style.css';

class Biodata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSiswa: getData(), //ambil data object
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this); 
    }
    //event handling untuk delete data
    onDeleteHandler(id) {
        const dataSiswa = this.state.dataSiswa.filter(siswa => siswa.id !== id);
        this.setState({ dataSiswa });
    }

    render() {
        return (
            <div className='biodata'>
                <Header />
                <CardList 
                    dataSiswa={this.state.dataSiswa} 
                    onDelete ={this.onDeleteHandler}
                />
            </div>
        )
    } 
}
 
const root = createRoot(document.getElementById('root'));
root.render(<Biodata />);