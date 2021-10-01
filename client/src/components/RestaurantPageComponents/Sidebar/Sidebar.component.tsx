import { Sidebar } from './Sidebar.style';
import SearchComponents from './SearchComponents/SearchComponents.component';
import DraggableComponents from './DraggableComponents/DraggableComponents.component';

const SidebarComponent = () => {
  return (
    <Sidebar>
      <SearchComponents />
      <DraggableComponents />
    </Sidebar>
  )
}

export default SidebarComponent;
