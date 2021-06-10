import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Footer.css';

export default function App() {
  return (
    <MDBFooter backgroundColor='primary' className='text-center text-lg-left ' >
      <MDBContainer className='p-4 lh-3'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0 '>
            <h5 className='text-uppercase lh-lg fw-bold'>Latest Blog Post</h5>
            <h2 className='lh-lg'>Ready to get started?</h2>

            <p className="lh-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
              pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 lh-lg'>
            <h5 className='text-uppercase mb-5 fw-bold'>Product</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Product
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Product
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Product
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Product
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 lh-lg mb-5 fw-bold'>Company</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Company
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Company
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Company
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark lh-lg mb-5'>
                  Company
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 mb-5' style={{ backgroundColor: 'background: #F2F2F2' }}>
        &copy; {new Date().getFullYear()}{' '}
        <a className='text-dark pt pb' href='https://mdbootstrap.com/'>
          Copyright
        </a>
      </div>
    </MDBFooter>
  );
}