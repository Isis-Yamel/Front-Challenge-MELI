import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import breadStyles from '@/styles/BreadCrumb.module.scss';

const BreadCrumb = ({breadcrumbs}: any) => {
  console.log(breadcrumbs);
  
  return (
    <Breadcrumbs className={breadStyles.breadcrumb__container} aria-label="breadcrumb">
      {breadcrumbs.items[0].bread.map((crumb: any) => (
        <Typography key={crumb.id}>
          {crumb.name}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;