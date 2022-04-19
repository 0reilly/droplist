import React, {
  useState
} from 'react';
import { IStore } from '../types';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import * as todoActions from '../redux/actions/todo/actions';
import HomeNav from '../containers/HomeNav';
import { useHistory } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import MDEditor from '@uiw/react-md-editor';


const Post = () => {
  const dispatch = useDispatch();

  const todoState = useSelector((state: IStore) => state.todo);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(todoActions.addTodo({
      name,
      pay,
      primary_tag: primaryTag,
      description,
      link,
      highlight,
      color
    }));
  };


  const [ promise, setPromise ] = useState(() => loadStripe('pk_test_51HX92ADV5bqQz6pNUHpNfJziKCFf5lOBPO6A30apaEDI0Yb0jvwOmQCcebkay4TIcs2JIsrNxQs9vN8NImlsaevO0030bqBsJQ'));

  const history = useHistory();
  const [ name, setName ] = useState('');
  const [ position, setPosition ] = useState('');
  const [ primaryTag, setPrimaryTag ] = useState('Primary Tag');
  const [ pay, setPay ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ billing, setBilling ] = useState('');
  const [ link, setLink ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ color, setColor ] = useState('#ffffff');
  const [ price, setPrice ] = useState(4900);
  const [ highlight, setHighlight ] = useState(false);
  const [ addBrand, setAddBrand ] = useState(false);

  console.log()
  const handleAddon = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (value === 'none') {
      setPrice(4900);
    } else if (value === 'highlight') {
      setColor('#fff9c9');
      setPrice(7900);
    }
  };

  return (
    <>
      <div>
        <HomeNav />
      </div>
      <div className='ml-4 mr-4 mt-4  d-flex flex-row justify-content-center'>
          <div className={'card'}>
            <div className='card-header'>
              <h4 className='text-center'>Let's Start</h4>
            </div>
            <div className='card-body'>
              <div className='pt-2 pb-2'>
                <span className='head'>COMPANY NAME</span>
                <input
                  value={ name }
                  onChange={ (e) => setName(e.target.value) }
                  type='text'
                  className='form-control'
                />
              </div>
              <div className='pt-2 pb-2'>
                <span>Social Media Platform</span>
                <select
                  value={ primaryTag }
                  onChange={ (e) => setPrimaryTag(e.target.value) }
                  className='custom-select my-1 mr-sm-2'
                >
                  <option>Select a social media platform</option>
                  <option value='TikTok'>TikTok</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='YouTube'>YouTube</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Snapchat'>Snapchat</option>
                </select>
              </div>
              <div className='pt-2 pb-2'>
                <span>DESCRIPTION</span>
                <div className='container'>
                  <MDEditor
                    value={ description }
                    onChange={ (value) => {if(value){setDescription(value)} } }
                    autoFocus={ false }
                    preview='edit'

                  />
                </div>
              </div>
              <div className='pt-2 pb-2'>
                <span>APPLY URL</span>
                <input
                  value={ link }
                  onChange={ (e) => setLink(e.target.value) }
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='pt-2 pb-2'>
                <span>PAY</span>
                <input
                  value={ pay }
                  onChange={ (e) => setPay(e.target.value) }
                  className='form-control'
                  type='text'
                />
              </div>
            </div>
          </div>
          <div className='card mt-5'>
            <div className='card-header'>
              <h4 className='text-center'>Design Your Sponsership Offer</h4>
            </div>
            <div className='card-body'>
              <p><input
                onChange={ (e) => handleAddon(e, 'none') }
                type='radio'
                name='addon'
                value='1'
                id='1'
                defaultChecked
              /><label htmlFor='1' className='pl-2'>Just a basic post. (+$49)</label></p>
              <p><input
                onChange={ (e) => handleAddon(e, 'highlight') }
                type='radio'
                name='addon'
                id='2'
                value='2'
              /><label
                htmlFor='2'
                className='pl-2'
              >Highlight your post in Yellow (+$20) (2X MORE VIEWS)</label></p>
            </div>
          </div>
          <div className='card mt-5 mb-5'>
            <div className='card-header'>
              <h4 className='text-center'>Finalize Listing</h4>
            </div>
            <div className='card-body'>
              <div className='pt-2 pb-2'>
                <span>COMPANY EMAIL</span>
                <input
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                  className='form-control'
                  type='text'
                />
              </div>
              <div className='pt-2 pb-2'>
                <span>FULL BILLING DETAILS</span>
                <textarea
                  value={ billing }
                  onChange={ (e) => setBilling(e.target.value) }
                  className='form-control'
                />
              </div>
              <div className='pt-4'>
                <Elements stripe={ promise }>
                  <CheckoutForm price={ price } form={ handleForm } />
                </Elements>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Post;
