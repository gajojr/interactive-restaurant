import { ComponentsContainer } from './DraggableComponents.style';
import DraggableComponent from './DraggableComponent/DraggableComponent.component';

const draggableComponents = [
  {
    id: 1,
    name: 'Table for 4',
    imgPath: '/temp.jpg'
  },
  {
    id: 2,
    name: 'Table for 6',
    imgPath: '/temp.jpg'
  },
  {
    id: 3,
    name: 'Table for 3',
    imgPath: '/temp.jpg'
  },
  {
    id: 4,
    name: 'Table for 8',
    imgPath: '/temp.jpg'
  }
]

const DraggableComponents = () => {
  return (
    <ComponentsContainer>
      {draggableComponents.map((component: any) => (
        <DraggableComponent component={component} />
      ))}
    </ComponentsContainer>
  )
}

export default DraggableComponents;
