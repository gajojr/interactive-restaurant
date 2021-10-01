import { ComponentsContainer } from './DraggableComponents.style';
import DraggableComponent from './DraggableComponent/DraggableComponent.component';

const DraggableComponents = () => {
  return (
    <ComponentsContainer>
      This is components container
      <DraggableComponent />
    </ComponentsContainer>
  )
}

export default DraggableComponents;
