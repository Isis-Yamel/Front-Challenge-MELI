import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import breadStyles from '@/styles/BreadCrumb.module.scss';

const BreadCrumb = ({breadcrumbs}: any) => {
  return (
    <Breadcrumbs className={breadStyles.breadcrumb__container} aria-label="breadcrumb">
      {breadcrumbs.map((crumb: any) => (
        <Typography key={crumb.id}>
          {crumb.name}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;