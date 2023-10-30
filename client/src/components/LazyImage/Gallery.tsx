import './Gallery.css';

import LazyImage from './LazyImage';
import { data } from '../../constant/data';

function Gallery() {
  return (
    <div data-test-id="component-app" className="container">
      <h1>
        Фото домов, построенных в Московской и Ленинградской области
      </h1>
      <p>
        Фотогалерея постоянно пополняется новыми объектами. Вы видите только часть построенного нами. Многие дома вы сможете посмотреть вживую, чтобы познакомиться с качеством нашей работы и оценить удобство планировки интересующего коттеджа. Всем нашим потенциальным заказчикам мы обязательно рекомендуем посетить не только готовые дома, но и съездить непостредственно на стройки, чтобы увидеть скрытые работы, которые будет невозможно посмотреть после окончания строительства.
      </p>
      <div className="flexbox">
        {data.map((item, index) => (
          <LazyImage src={item.src} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;