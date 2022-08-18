import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function WeaponForm(props) {
  
  function onFight(event) {
    event.preventDefault();
    props.handleChoice(event.target.weapon.value);
  }

  return (
    <Form onSubmit={onFight}>
      <Form.Group className="mb-3" controlId="weapon">
        <Form.Label>Choose Your Weapon</Form.Label>
        <Form.Select>
          <option>Rock</option>
          <option>Paper</option>
          <option>Scissors</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Fight!
      </Button>
    </Form>
  );
}