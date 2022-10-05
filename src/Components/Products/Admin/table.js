import React from 'react';
import '../../../sass/AdminProducts.scss'

const Table = ({
  queryCur,
  sortType,
  products,
  actAttr,
  activePage,
  activeProduct,
  handleDelete,
  handleEdit,
  handleSort
}) => {
  const displayProduct = (
    queryCur,
    sortType,
    products,
    actAttr,
    activePage
  ) => {
    return activeProduct(queryCur, sortType, products, actAttr).slice(
      (activePage - 1)
    );
  };

  const showOrder = attr => {
    return (
      actAttr === attr &&
      (sortType === 1 ? (
        <i className='fas fa-arrow-up sort' />
      ) : (
        sortType === 2 && <i className='fas fa-arrow-down sort' />
      ))
    );
  };
  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 100 }} alt="Avatar" src={data} /> : undefined}
    </>
  );
  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <div>
      <table className='table table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col' id='productName' onClick={e => handleSort(e)}>
              Produkt Name {showOrder('productName')}
            </th>
            <th scope='col' id='category' onClick={e => handleSort(e)}>
              Produkten Kategorien {showOrder('category')}
            </th>
            <th scope='col' id='descrition' onClick={e => handleSort(e)}>
              Beschreibung {showOrder('description')}
            </th>
            <th scope='col' id='price' onClick={e => handleSort(e)}>
              Preis in Euro {showOrder('price')}
            </th>
            <th scope='col' id='photo' onClick={e => handleSort(e)}>
              Bild {showOrder('photo')}
            </th>
            <th scope='col'>Bearbeiten</th>
            <th scope='col'>Löschen</th>
          </tr>
        </thead>

        <tbody>
          {displayProduct(
            queryCur,
            sortType,
            products,
            actAttr,
            activePage,
            activeProduct
          ).map(products=> {
            console.log("Table:",products);
            return (
              <tr className='product' key={products._id}>
                
                <td>
                  <div className='table-data'>{products.productName}</div>
                </td>
                <td>
                  <div className='table-data'>{products.category}</div>
                </td>
                <td>
                  <div className='table-data'>{products.description}</div>
                </td>
                <td>
                  <div className='table-data' style={{width: 100}}>{formatPrice(products.price)}</div>
                </td>
                <td>
                  <div className='table-data'>
                    <ImageBase64 data={products.photo} alt='Bild' />
                    </div>
                </td>
                <td>
                  <button
                    className='btn btn-outline-primary btn-sm'
                    onClick={e => handleEdit(products._id)}
                  >
                    <i className='fas fa-pen' /> Bearbeiten
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-outline-danger btn-sm'
                    onClick={e => handleDelete(products._id)}
                  >
                    <i className='fas fa-trash' /> Löschen
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;