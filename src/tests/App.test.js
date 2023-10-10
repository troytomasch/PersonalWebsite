import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { experiences, projects } from "../data";

test("renders home page and all its components", () => {
  render(<App />);

  // Test to see if the navbar components are rendered
  expect(screen.getByRole(/link/, { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole(/link/, { name: "Resume" })).toBeInTheDocument();
  expect(screen.getByRole(/link/, { name: "Projects" })).toBeInTheDocument();

  // Test to see if footer links are rendered
  expect(
    screen.getByRole(/link/, { name: "link to my Github" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole(/link/, { name: "link to my Linkedin" })
  ).toBeInTheDocument();

  // Test to see if all the text is in the screen
  expect(screen.getByText(/Hello! Welcome to my website!/)).toBeInTheDocument();
  expect(
    screen.getByText(
      /I'm a 22 year old developer who enjoys developing user-centered web and mobile apps./
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /My frontend technology of choice is React and I used it along with Tailwind CSS to develop this website./
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /I'm always interested in learning new technologies and in the past I've worked with Ruby on Rails, Swift and React Native./
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /In my free time, I enjoy traveling with my girlfriend and spending time with friends and family./
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /You can often find me running and hiking the trails or hitting the roads on my bike./
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /Thanks for visiting! Feel free to check out what I've been working on through the resume or projects pages./
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /You can also get in touch with me at troytomasch@gmail.com. Have a great day!/
    )
  ).toBeInTheDocument();

  // Test to see if all the images are in the screen
  expect(screen.getByAltText(/Troy in Shenandoah/)).toBeInTheDocument();
  expect(screen.getByAltText(/Troy sitting on a mountain/)).toBeInTheDocument();
  expect(screen.getByAltText(/Troy in NYC/)).toBeInTheDocument();
  expect(
    screen.getByAltText(/Troy presenting his app, Hoboken Now/)
  ).toBeInTheDocument();
  expect(
    screen.getByAltText(/Troy traveling with his girlfriend/)
  ).toBeInTheDocument();
  expect(screen.getByAltText(/Troy running/)).toBeInTheDocument();
  expect(screen.getByAltText(/Troy in front of an arch/)).toBeInTheDocument();
  expect(screen.getByAltText(/Troy next to a waterfall/)).toBeInTheDocument();
});

cleanup();

test("renders projects page and all its components", async () => {
  render(<App />);

  const projectsButton = screen.getByRole(/link/, { name: "Projects" });
  userEvent.click(projectsButton);

  await waitFor(() => {
    // Test to see if the navbar components are rendered
    expect(screen.getByRole(/link/, { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole(/link/, { name: "Resume" })).toBeInTheDocument();
    expect(screen.getByRole(/link/, { name: "Projects" })).toBeInTheDocument();

    // Test to see if footer links are rendered
    expect(
      screen.getByRole(/link/, { name: "link to my Github" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole(/link/, { name: "link to my Linkedin" })
    ).toBeInTheDocument();

    // Check if all list items are present
    let listItems = screen.getAllByRole(/listitem/);
    expect(listItems.length == projects.length);
  });
});

cleanup();

test("renders resume page and all its components", async () => {
  render(<App />);

  const resume = screen.getByRole(/link/, { name: "Resume" });
  userEvent.click(resume);

  await waitFor(() => {
    // Test to see if the navbar components are rendered
    expect(screen.getByRole(/link/, { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole(/link/, { name: "Resume" })).toBeInTheDocument();
    let projectLinks = screen.getAllByRole(/link/, { name: "Projects" });
    expect(projectLinks.length == 2);

    // Test to see if footer links are rendered
    expect(
      screen.getByRole(/link/, { name: "link to my Github" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole(/link/, { name: "link to my Linkedin" })
    ).toBeInTheDocument();

    // Test to ensure headers are rendered
    expect(
      screen.getByRole(/heading/, { name: "Education" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole(/heading/, { name: "Work Experience" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole(/heading/, { name: "Projects" })
    ).toBeInTheDocument();

    // Check if all list items are present
    let listItems = screen.getAllByRole(/listitem/);
    expect(listItems.length == experiences.length);
  });
});
