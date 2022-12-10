import './App.css';
import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const [degreedist, setDegreeDist] = useState('');
  const [categorizedstats, setCategorizedStats] = useState('');
  const [topk, setTopK] = useState('');
  const [ratedvideos, setRatedVideos] = useState('');
  const [sizerange, setSizeRange] = useState('');
  const [pagerank, setPagerank] = useState('');
  const [output, setOutput] = useState('');

  const handleDegreeDist = event => {
    setDegreeDist(event.target.value);
  }
  const handleCategorizedStats = event => {
    setCategorizedStats(event.target.value);
  }
  const handleTopK = event => {
    setTopK(event.target.value);
  }
  const handleRatedVideos = event => {
    setRatedVideos(event.target.value);
  }
  const handleSizeRange = event => {
    setSizeRange(event.target.value);
  }
  const handlePagerank = event => {
    setPagerank(event.target.value);
  }
  const handleOutput = event => {
    setOutput(event.target.value);
  }

  const degreefunct = () => {
    axios.get('/endpoint', {
    })
    .then(function (response) {
      console.log(response);
      setOutput(response);
    })

  }

  const categorizedfunct = () => {
    axios.get('/endpoint', {
      params: {
        id: categorizedstats
      }
    })
    .then(function (response) {
      console.log(response);
      setOutput(response);
    })
  }

  const topkfunct = () => {
    axios.get('/endpoint', {
      params: {
        id: topk
      }
    })
    .then(function (response) {
      console.log(response);
      setOutput(response);
    })
  }

  const ratedvideosfunct = () => {
    axios.get('/endpoint', {
      params: {
        id: ratedvideos
      }
    })
    .then(function (response) {
      console.log(response);
      setOutput(response);
    })
  }

  const sizerangefunct = () => {
    const length = sizerange.split(',')
    axios.get('/endpoint', {
      params: {
        x: length[0],
        y: length[1],
      }
    })
    .then(function (response) {
      console.log(response);
      setOutput(response);
    })
  }

  const pagerankfunct = () => {
    axios.get('/endpoint', {
      params: {
        id: pagerank
      }
    })
    .then(function (response) {
      console.log(response);
      setOutput(response);
    })
  }

  return (
    <div className="App">
      <Typography 
        variant="h2" 
        gutterBottom
        sx={{
          marginLeft: -148,
          marginTop: 2,
      }}>
        YouTube Analyzer
      </Typography>
      <Typography 
        variant="body2" 
        gutterBottom
        align="left"
        sx={{
          marginLeft: 140,
        }}
      >
        Tool created by: Daniel Lee, Arvind Nambakam, Ryan Pierce, Daniil Sagun, Paul Swan
      </Typography>
      <Typography 
        variant="body2" 
        gutterBottom
        align="left"
        sx={{
          marginLeft: 140,
        }}
      >
        Tool developed using: React.js, Apache Cassandra, Networkx, PyServer
      </Typography>
      <TextField
        disabled
          id="outlined-multiline-static"
          label="Output"
          multiline
          rows={4}
          value = {output}
          onChange = {handleOutput}
          sx={{
            marginLeft: 128,
            marginTop: 1,
          }}
          style= {{
            width: "500px"
          }}
        />
      <Accordion
        sx={{
          maxWidth: 600,
          marginLeft: 4,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>A. Network Aggregation</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            disabled
            id="outlined-required"
            label="Degree Distribution"
            helperText="Input NA"
            value= {degreedist}
            onChange= {handleDegreeDist}
          />
          <Button  style={{ marginTop: 8, minHeight: 56}} variant="outlined" onClick={degreefunct}>Search</Button>
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          <TextField
            id="outlined-required"
            label="Categorized Statistics"
            helperText="Enter Search Condition"
            value = {categorizedstats}
            onChange = {handleCategorizedStats}
          />
          <Button  style={{ marginTop: 8, minHeight: 56}} variant="outlined" onClick={categorizedfunct}>Search</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: 600,
          marginLeft: 4,
          marginTop: 5,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>B. Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-required"
            label="Top K Queries"
            helperText="Enter Category"
            value= {topk}
            onChange= {handleTopK}
          />
          <Button  style={{ marginTop: 8, minHeight: 56}} variant="outlined" onClick={topkfunct}>Search</Button>
          </Box>
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-required"
            label="Rated Videos"
            helperText="Enter Category"
            value= {ratedvideos}
            onChange= {handleRatedVideos}
          />
          <Button  style={{ marginTop: 8, minHeight: 56}} variant="outlined" onClick={ratedvideosfunct}>Search</Button>
          </Box>
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-required"
            label="Videos in Size Range [x,y]"
            helperText="Enter range of video length"
            value= {sizerange}
            onChange= {handleSizeRange}
          />
          <Button  style={{ marginTop: 8, minHeight: 56}} variant="outlined" onClick={sizerangefunct}>Search</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: 600,
          marginLeft: 4,
          marginTop: 5,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>C. Influence Analysis</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-required"
            label="PageRank"
            helperText="Enter 'k' Videos to Rank"
            value= {pagerank}
            onChange= {handlePagerank}
          />
          <Button  style={{ marginTop: 8, minHeight: 56}} variant="outlined" onClick={pagerankfunct}>Search</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
