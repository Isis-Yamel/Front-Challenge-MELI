import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import breadStyles from '@/styles/BreadCrumb.module.scss';

const BreadCrumb = ({breadcrumbs}: any) => {
  const fallback = ['Categories', 'Category'];
  
  return (
    <Breadcrumbs className={breadStyles.breadcrumb__container} aria-label="breadcrumb">
      {!!breadcrumbs.bread ? breadcrumbs.bread.map((crumb: any) => (
        <Typography key={crumb.id}>
          {crumb.name}
        </Typography>
      )) : fallback.map((crumb, index) => {
        <Typography key={index}>
          {crumb}
        </Typography>
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumb;