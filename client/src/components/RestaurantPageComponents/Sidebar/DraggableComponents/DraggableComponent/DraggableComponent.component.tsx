import { Component, Image, Name } from './DraggableComponent.style';

const DraggableComponent = ({ component }: { component: any }) => {
  return (
    <Component>
      <Image src={component.imgPath} alt={component.name} />
      <Name>{component.name}</Name>
    </Component>
  )
}

export default DraggableComponent;
