import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetail";
import { Button } from "react-bootstrap";

export default function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();

  let hasScoops = totals.scoops > 0 ? true : false;

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button
        disabled={!hasScoops}
        onClick={() => {
          setOrderPhase("review");
        }}
      >
        Order Sundae!
      </Button>
    </div>
  );
}
