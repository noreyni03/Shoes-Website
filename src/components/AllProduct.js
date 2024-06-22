import React, { useEffect, useState } from 'react';
import data from '../data/products.json';
import { FiSearch } from 'react-icons/fi';
import { Card } from './AllProductsComponents/Card';
import { useLocation } from 'react-router';
import { BiMale } from 'react-icons/bi';


export default function AllProduct() {
    const [Malecheck, isMale] = useState(false);
    const [Femalecheck, isFemale] = useState(false);
    const [cards, changeCards] = useState(data);
    const [search, setSearch] = useState('');
    const allprods = data;


    //filter to show only male shoes
    function malechange() {
        isMale(document.getElementById('male').checked);

        !Malecheck ?
            changeCards(cards.filter((obj) => {
                return (
                    obj.type === 'male'
                )
            }))
            : changeCards(allprods)
    }

    //filter to show only female shoes
    function femalechange() {
        isFemale(document.getElementById('female').checked);

        !Femalecheck ?
            changeCards(cards.filter((obj) => {
                return (
                    obj.type === 'female'
                )
            }))
            : changeCards(allprods)
    }

    //console.log(search);
    return (
        <div className="mt-5 p-3">

            <div className="d-md-none">
                <button>Filter</button>
            </div>



            <div className="row">

                {/* -------------------- FILTER ---------------------------- */}

                <div className="d-none d-md-inline col-md-2">
                    <form className="container mt-3 ms-3">
                        <h2 className="mb-4">Filtrer</h2>

                        <div className="mb-5">

                            <p className="mb-2">Chaussures Quotidiennes</p>
                            <p className="mb-2">Chaussures de Courses</p>
                            <p className="mb-2">Basketball</p>
                            <p className="mb-2">Football</p>
                            <p className="mb-2">Entraînement & Gym</p>
                            <p className="mb-2">Golf</p>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <h5 className="fs-5 fw-normal mb-3">Genre</h5>
                            <div className="mb-2">
                                <input className="me-1" type="checkbox" id="male" name="male" value="Male" onChange={malechange} />
                                <label htmlFor="male"> Homme </label>
                            </div>
                            <div>
                                <input className="me-1" type="checkbox" id="female" name="female" value="Female" onChange={femalechange} />
                                <label htmlFor="female"> Femme </label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* -------------------- Cards ---------------------------- */}

                <div className="col col-md-9">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='ms-5'>
                            <h1 className=''>Produits Disponibles</h1>
                        </div>
                        <div className="search input-group w-25 me-3">
                            <span className="input-group-text" id="addon-wrapping"><FiSearch /></span>
                            <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                        </div>
                    </div>

                    <div className="row mx-2">
                        {
                            cards.filter((obj) => {
                                return search.toLowerCase() === '' ? obj : obj.name.toLowerCase().includes(search)
                            }).map((obj,i) => {
                                return (
                                    <div className="container mt-4 col-6 col-md-3">
                                        <Card key={i} id={obj.id} name={obj.name} price={obj.price} img={obj.img} categ="Men's Shoe" onSale={obj.onSale} salePrice={obj.salePrice} type={obj.type} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}