import { RestaurantPageContainer } from './RestaurantPage.style';

import SidebarComponent from '../../components/RestaurantPageComponents/Sidebar/Sidebar.component';
import Workspace from '../../components/RestaurantPageComponents/Workspace/Workspace.component';

const HomePage = () => {
  return (
    <RestaurantPageContainer>
      <SidebarComponent />
      <Workspace />
    </RestaurantPageContainer>
  )
}

export default HomePage;
