import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
// import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
// import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
// import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
// import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
// import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    // icon: <SettingsSuggestRoundedIcon />,
    title: 'Mt. Gox (2014)',
    description:
      "Mt. Gox was the world's largest Bitcoin exchange before its collapse in 2014. It suffered a hack in which over 850,000 bitcoins were stolen, leading to the exchange's bankruptcy.",
  },
  {
    // icon: <ConstructionRoundedIcon />,
    title: 'Bitfinex (2016)',
    description:
      'In 2016, hackers attacked the Bitfinex Bitcoin exchange, stealing approximately 120,000 bitcoins. This incident also resulted in significant losses for users and the company.',
  },
  {
    // icon: <ThumbUpAltRoundedIcon />,
    title: 'Bitstamp (2015)',
    description:
      "In 2015, one of Bitstamp's internal servers was compromised, and hackers stole around 19,000 bitcoins.",
  },
  {
    // icon: <AutoFixHighRoundedIcon />,
    title: 'NiceHash (2017)',
    description:
      'NiceHash, a cryptocurrency mining platform, was hacked in 2017, and hackers stole about 4,700 bitcoins from internal wallets.',
  },
  {
    // icon: <SupportAgentRoundedIcon />,
    title: 'Coincheck (2018)',
    description:
      'The Japanese cryptocurrency exchange Coincheck was hacked in January 2018, resulting in the theft of over $500 million worth of bitcoins and other cryptocurrencies.',
  },
  {
    // icon: <QueryStatsRoundedIcon />,
    title: 'Binance (2019)',
    description:
      'In May 2019, hackers gained access to API keys and two-factor authentication of some users on the Binance exchange, enabling them to execute a series of trades and steal around 7,000 bitcoins.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        // bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Hackers?
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Yes, in cryptocurrency, just like on the regular Internet, there are hackers. It would be more correct to call them Black Hat. These are programmers who look for vulnerabilities in projects, smart contracts, and so on. And we are them. If you think this isn't serious, here's the big news about major cyberattacks in recent years. 
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
