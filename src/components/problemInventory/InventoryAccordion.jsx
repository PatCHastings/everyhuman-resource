import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function InventoryAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Excess Inventory</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Excess inventory is costly and accumulates without observation. Here
            are strategies to reduce it.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Problematic Inventory</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Problematic inventory arrives without an invitation and requires
            special effort to manage.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default InventoryAccordion;
