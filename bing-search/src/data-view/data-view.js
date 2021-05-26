import React, { useState, useRef, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import DataService from './dataService';

import './data-view.css';

const DataView = () => {
    const [products, setProducts] = useState([]);
    const [nome, setNome] = useState("");
    // const productService = new ProductService();

    const dataService = new DataService();

    // this.imageBodyTemplate = imageBodyTemplate.bind(this);

    useEffect(() => {
        console.log("nome", nome)

        // dataService.getData(nome).then(data => setProducts(data));


    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const imageBodyTemplate = (rowData) => {
        // return <img src={`${rowData.contentUrl}`} />;
        // return rowData.contentUrl
        return <img src={rowData.contentUrl} className="data-image" />;
    }

   const onFormSubmit = (e) => {

        e.preventDefault()


        dataService.getData(nome).then(data => setProducts(data))


    }

    
    // imageBodyTemplate(rowData) {
    //     return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    // }

    return (



        
        
        <div>
        <form className="p-d-flex p-jc-center p-mt-6" onSubmit={onFormSubmit}>
            <InputText value={nome} onChange={(e) => setNome(e.target.value)} />
            <Button type="submit" label="Submit" icon="pi pi-check" className="p-ml-2"/>
        </form>
            <div className="card">
                <DataTable value={products.value}>
                    {/* <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column> */}
                    <Column header="URL" field="contentUrl" ></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default DataView;