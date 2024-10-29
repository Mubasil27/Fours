
import img1 from '../Image/coco.png';
import img2 from '../Image/hamburger-3184108.png';
import img3 from '../Image/pizza-8593436.png';
import img4 from '../Image/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.avif';
import img5 from '../Image/8dc39742916ddc369ebeb91928391b931632716660.avif';
import img6 from '../Image/37df381734b24f138af4a84fd7e4d4ec1716558578.avif';
import img7 from '../Image/c2f22c42f7ba90d81440a88449f4e5891634806087.avif';
import img8 from '../Image/fc641efbb73b10484257f295ef0b9b981634401116.avif';
import { Link } from 'react-router-dom';
import {Dataa, deta} from '../Compo/Datadetails';



const Category = () => {
  
  return (
    <div id="category" className="category-container">
      <div className='aaa'></div>
      <div className="category-header">
        <h1><span>Category</span></h1>
      </div>
      
      <div className="category-grid animate__animated animate__fadeInLeftBig">
        <Link to="/coffee"><div className="category-item">
          <img src={img1} alt="Coffee" />
          <h2>Shake</h2>
        </div></Link>

      
        <Link to="/burger"><div className="category-item">
          <img src={img2} alt="Burger" />
          <h2>Burger</h2>
        </div></Link>

        <Link to="/pizza"><div className="category-item">
          <img src={img3} alt="Pizza" />
          <h2>Pizza</h2>
        </div></Link>
        <Link to="/chicken"><div className="category-item">
          <img src={img4} alt="Chicken" />
          <h2>Chicken</h2>
        </div></Link>
        
      </div>
      
      <div className="category-grid animate__animated animate__fadeInRightBig">
        <Link to="/Dosa"><div className="category-item">
          <img src={img5} alt="Dosa" className="round" />
          <h2>Dosa</h2>
        </div></Link>
        <Link to="/biryani"><div className="category-item">
          <img src={img6} alt="Biryani" />
          <h2>Biryani</h2>
        </div></Link>
        <Link to="/rolls"><div className="category-item">
          <img src={img7} alt="Rolls" />
          <h2>Rolls</h2>
        </div></Link>
        
        <Link to="/swich"><div className="category-item">
          <img src={img8} alt="Sandwich" className="round" />
          <h2>Sandwich</h2>
        </div></Link>
        
      </div>
    </div>
  );
}

export default Category;
