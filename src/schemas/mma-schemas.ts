// MMA JSON schemas for tool parameters

export const mmaLeaguesSchema = {
  type: "object",
  properties: {},
  additionalProperties: false,
};

export const mmaLeagueByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the league to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const mmaEventsSchema = {
  type: "object",
  properties: {
    date: {
      type: "string",
      format: "date",
      description: "Filter by event date (YYYY-MM-DD)",
    },
    year: {
      type: "number",
      description: "Filter by event year",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const mmaEventByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the event to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const mmaFightersSchema = {
  type: "object",
  properties: {
    search: {
      type: "string",
      description: "Search fighters by name",
    },
    fighter_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by specific fighter IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const mmaFighterByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the fighter to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const mmaFightsSchema = {
  type: "object",
  properties: {
    fight_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by specific fight IDs",
    },
    fighter_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter fights involving specific fighters",
    },
    event_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter fights by event IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const mmaFightByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the fight to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const mmaRankingsSchema = {
  type: "object",
  properties: {},
  additionalProperties: false,
};

export const mmaFightStatsSchema = {
  type: "object",
  properties: {
    fight_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by specific fight IDs",
    },
    fighter_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter statistics for specific fighters",
    },
    event_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter statistics by event IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const mmaFightStatByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the fight stat to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const mmaBettingOddsSchema = {
  type: "object",
  properties: {
    event_id: {
      type: "number",
      description: "Filter odds by event ID",
    },
    fight_id: {
      type: "number",
      description: "Filter odds by fight ID",
    },
  },
  additionalProperties: false,
};
