type learning_data = {
  metadata: {
    company: string;
    page_id_type: "url" | "iframe_id";
    is_learned: boolean;
  };
  scripts: page_script[];
};

type page_script = {
  page_id: string;
  is_learned: boolean;
  scripts: script[];
};

type script = {
  type: "input" | "input_group";
  value: input | input_group;
};

type input = {
  name: string;
  css_selector: string;
  type: "text" | "radio" | "checkbox" | "select" | "textarea";
  is_always: boolean;
  always_value: string;
};

type input_group = {
  name: string;
  css_selector: string;
  type: "radio_group" | "checkbox_group";
  conditions: Map<string, input>;
};
