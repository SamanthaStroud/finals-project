import {
  Card,
  Image,
  Text,
  Group,
  Button,
  Box,
  Title,
  Divider,
} from "@mantine/core";

const cartItems = [
  {
    id: 1,
    name: "Gummy Bears",
    price: 6.99,
    image: "/images/gumybear.jpg",
    qty: 1,
  },
  {
    id: 2,
    name: "Jelly Beans",
    price: 5.99,
    image: "/images/jellybean.jpg",
    qty: 1,
  },
  {
    id: 3,
    name: "Starburst",
    price: 4.99,
    image: "/images/starburst.jpg",
    qty: 1,
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <Box ta="center" p="xl">
      <Title order={2} mb="md">
        Your Cart
      </Title>

      <Card
        shadow="md"
        p="lg"
        radius="lg"
        style={{
          background: "linear-gradient(#f2b6c6, #f7c6c6)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {cartItems.map((item) => (
          <Group key={item.id} justify="space-between" align="center" mb="md">
            <Group>
              <Image src={item.image} width={60} radius="md" />
              <Text fw={500}>{item.name}</Text>
            </Group>

            <Group>
              <Button size="xs" variant="light">
                −
              </Button>
              <Text>{item.qty}</Text>
              <Button size="xs" variant="light">
                +
              </Button>
            </Group>

            <Text fw={600}>${item.price.toFixed(2)}</Text>
          </Group>
        ))}
      </Card>

      <Card
        shadow="lg"
        mt="xl"
        p="lg"
        radius="lg"
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <Title order={4} mb="sm">
          Order Summary
        </Title>

        <Group justify="space-between">
          <Text>Subtotal</Text>
          <Text fw={600}>${subtotal.toFixed(2)}</Text>
        </Group>

        <Divider my="sm" />

        <Button fullWidth radius="md" mt="md">
          Checkout
        </Button>
      </Card>
    </Box>
  );
}
