const a=[-.1,-.1,-.18,.05,-.25,-.12,-.11,-.4,-.08,-.28,.13,.16,.14,.29,.09,-.18,-.23,.12,.28,-.06,.08,.69,-.13,.18,0,-.24,.72,-.2,.04,.66,-.29,.68,-.19,-.36,.36,-.04,-.15,.07,-.23,-.22,.06,-.3,-.23,0,.05,.12,.13,.23,.57,-.52,-.27,-.1,-.04,-.23,-.47,-.11,.1,-.47,-.18,-.12,-.6,-.29,-.45,-.04,.37,.61,-.31,.18,.09,-.05,-.07,-.13,-.61,.24,-.27,.06,.14,-.61,-.13,.48,.17,-.12,0,-.27,.25,1,-.21,.14,.29,-.08,-.53,.04,-.37,-.08,.14,.12,.15,.01,.29,-.65,-.03,-.36,-.37,-.05,-.48,.13,.15,.21,-.12,-.35,-.27,-.53,-.21,-.02,.48,-.06,.16,.63,.42,-.15,.01,.42,-.21,.14,-.09,-.44,-.22,.29,.4,-.13,-.31,.09,-.01,-.59,-.05,.05,-.58,-.22,.58,-.1,-.39,-.23,-.47,-.23,-.22,-.06,0,.07,-.31,.11,-.36,-.42,-.04,-.18,-.41,-.38,.12,-.07,0,.1,-.38,-.37,.07,-.25,-.36,-.58,-.21,.6,-.09,-.2,-.2,.5,-.42,-.27,-.12,.74,.09,.62,-.64,-.14,.12,-.03,-.17,-.05,-.43,.05,-.08,-.24,-.48,.16,.01,-.47,.3,-.53,-.52,-.06,-.36,-.13,-.05,.76,-.17,-.38,-.18,-.1,.13,-.34,-.08,-.54,-.55,.1,-.42,.11,.17,-.07,-.44,-.38,.04,-.4,.72,.42,-.17,-.39,-.27,-.19,-.16,-.17,-.46,.63,-.23,-.22,-.09,.01,-.04,-.14,.21,-.26,.12,.05,-.18,-.03,-.69,.12,-.36,-.52,-.35,-.3,.01,-.36,.05,-.11,-.44,.59,-.46,.13,-.32,.31,0,-.3,-.32,-.09,-.13,-.35,-.31,-.36,-.06,-.46,.28,-.24,-.01,-.33,.43,-.16,-.18,-.24,-.15,.16,.59,-.65,-.3,.59,-.62,.46,-.15,.13,-.23,-.11,.48,-.13,-.28,.72,-.07,-.47,-.17,-.25,-.22,-.22,-.05,.14,-.47,-.3,-.04,-.09,.63,-.08,-.05,-.11,.43,-.65,-.27,.06,-.39,-.09,.32,-.19,.16,-.31,-.4,-.43,-.26,-.34,-.35,.22,.12,-.29,-.39,-.31,-.17,.11,.2,-.3,.31,-.22,.12,.01,.51,.01,.57,-.19,.03,.65,-.62,-.12,.06,.07,-.13,-.21,-.12,-.59,-.19,-.44,-.43,-.57,-.21,-.25,-.07,-.09,-.27,.14,-.3,-.12,-.18,-.25,-.19,.34,.13,.1,-.24,-.19,-.57,-.1,.66,-.04,-.12,-.08,-.53,-.22,-.01,-.22,-.03,-.55,.01,.1,.09,-.16,.04,.04,.06,.21,-.08,-.14,-.29,.19,-.06,-.08,-.01,-.11,.57,.01,.04,-.02,.34,-.1,-.25,-.18,-.46,.19,.05,-.26,-.34,-.19,-.25,.23,.04,-.29,-.17,-.16,-.35,.16,-.63,.32,-.2,-.04,.45,.12,.02,-.14,-.1,.18,-.34,-.23,-.26,-.02,-.17,-.09,-.58,-.29,-.05,-.17,-.22,-.41,-.4,-.35,-.48,-.11,-.59,-.35,-.1,-.17,-.2,.3,-.3,-.5,.29,-.01,-.07,-.04,.79,-.22,-.3,-.2,-.31,-.26,.08,-.65,-.02,.24,-.06,.19,.31,-.21,.19,-.16,-.3,-.18,-.56,-.08,-.31,-.39,-.08,.65,-.42,-.04,-.14,-.31,-.71,-.05,-.24,-.04,.21,-.18,.03,.19,.17,-.13,-.33,-.13,-.34,.04,-.08,-.36,-.41,-.02,-.32,-.12,-.39,-.04,-.06,-.07,-.04,-.68,-.42,-.11,-.44,-.08,-.71,.66,-.5,-.44,-.64,-.18,.26,-.18,.2,.05,-.33,-.16,-.09,-.17,-.2,-.29,-.47,-.37,-.12,-.5,-.19,-.31,-.3,.19,.04,.2,.05,-.42,.31,.56,.41,.11,-.24,.62,-.41,-.07,.41,-.17,-.26,-.18,-.45,.2,.44,-.35,.12,-.01,-.3,.63,-.12,-.24,-.17,-.05,-.02,.08,-.5,.17,-.23,-.18,-.2,-.21,-.17,-.17,.07,.64,-.51,.05,.41,-.22,-.41,-.16,-.47,.07,-.12,-.47,.43,-.12,-.07,0,.12,-.35,-.26,.06,-.1,-.17,-.43,-.29,-.04,-.3,-.16,-.51,-.05,.69,-.47,.37,-.19,.01,.02,-.08,-.05,-.49,.14,-.18,-.11,-.31,.17,-.2,-.15,-.07,-.14,-.04,-.18,.12,-.38,-.33,-.36,-.21,.08,.21,.24,-.61,.1,-.41,-.07,-.62,-.28,.74,-.51,-.23,.58,-.15,.04,-.34,-.07,-.32,.38,-.47,-.05,.22,-.36,-.17,-.09,-.06,.08,-.02,.16,.01,-.1,-.17,-.19,-.53,-.03,-.16,-.05,-.1,-.31,-.3,-.22,.11,.08,.61,-.34,-.41,-.44,-.25,.23,-.14,-.17,.09,-.13,-.16,-.32,-.38,.13,-.32,-.18,-.11,-.15,.13,-.08,.25,-.26,.08,-.3,-.23,-.35,.19,-.3,-.29,-.41,-.11,-.07,.15,-.02,.09,-.1,.7,-.26,-.36,-.38,-.13,.16,-.05,.01,.06,.12,.13,-.32,-.24,-.13,.06,-.09,.16,.3,.74,-.05,-.17,.22,-.31,-.14,.24,-.53,-.53,-.09,.07,-.06,-.03,.19,-.01,.7,.64,-.06,.06,-.18,-.04,-.14,-.62,-.11,.64,.26,-.3,-.24,.08,.46,.31,-.11,.02,0,.62,-.03,-.11,.34,-.1,-.3,.24,.37,-.22,-.16,-.35,-.25,-.3,-.55,.07,-.33,-.4,-.18,-.59,-.12,.56,.03,-.36,-.14,-.33,-.4,-.59,.35,.73,.75,-.09,-.27,.15,-.19,.57,-.18,-.48,.14,-.38,.01,-.13,.22,-.34,-.18,-.1,-.35,.33,-.51,.11,.02,-.08,-.14,.63,-.26,-.4,.15,.6,.04,-.12,-.13,-.14,-.23,.01,.03,-.18,.09,-.31,.17,-.08,.08,-.16,-.45,.3,.12,.45,.01,-.05,-.28,.72,-.33,-.12,.14,-.43,.43,-.32,.17,.59,-.59,.17,.09,.61,-.3,.16,.14,-.02,-.5,-.42,-.36,.49,-.5,-.26,.45,.21,0,-.35,.42,-.2,-.35,-.36,.05,.05,.05,-.55,-.27,-.52,.03,-.14,.12,-.23,.66,-.23,.06,-.38,-.04,-.32,-.44,.16,-.3,-.29,-.33,.22,.24,-.52,-.28,.01,.04,.09,-.13,-.2,.09,.22,-.02,.03,-.14,-.1,-.17,-.5,-.12,-.51,-.25,.64,.6,-.16,-.45,-.03,-.16,-.4,-.34,-.02,-.26,.23,.1,-.09,-.29,-.23,-.33,-.17,-.1,-.5,-.48,-.24,.01,-.24,-.31,.14,-.58,.13,-.38,-.26,-.04,.28,-.24,-.25,-.06,-.15,-.37,-.11,.17,-.02,-.34,.03,.04,.5,-.41,-.18,-.29,.02,-.27,.2,-.08,.08,-.31,.09,-.27,-.02,-.08,0,.36,-.08,.37,-.03,.22,.22,-.16,-.12,.01,-.16,-.58,-.13,-.28,-.37,.67,-.37,-.21,-.24,-.36,-.19,-.14,-.44,-.53,-.35,-.53,-.3,-.1,-.49,.03,-.11,-.12,.14,-.02,0,-.07,-.04,-.1,.26,-.08,-.11,.15,-.01,.15,-.52,-.21,.54,-.12,-.12,-.4,-.15,0,-.02,-.36,-.01,-.21,-.41,-.28,-.14,-.35,-.01,-.22,.07,-.37,.04,.09,-.2,-.04,-.57,-.07,-.23,-.07,-.03,-.15,-.13,.55,-.06,-.11,-.54,0,-.01,.31,-.24,-.57,-.36,.03,-.17,.12,.07,.15,-.12,-.27,-.06,.52,-.08,-.11,.04,-.73,-.28,.61,-.28,-.15,-.02,-.46,-.58,-.44,-.06,.37,-.2,-.14,-.3,-.39,-.28,-.2,.79,-.13,-.06,-.65,.43,-.23,.19,.71,-.25,.12,.06,-.32,.77,-.15,-.42,-.22,0,-.21,-.11,-.14,.44,-.56,-.23,0,-.23,-.15,.08,-.15,.26,.36,-.6,-.58,.05,.64,.56,.11,-.01,-.44,-.14,.32,.08,.05,-.29,.24,-.14,-.09,.17,-.53,.16,-.41,-.2,-.24,.14,.05,-.23,-.17,-.15,-.25,.06,-.14,.37,.02,-.12,-.39,-.22,-.02,.07,-.19,-.13,-.13,.25,-.66,-.13,.19,-.43,-.19,-.39,-.24,-.19,-.12,-.21,-.04,-.57,-.02,-.03,-.24,-.21,-.32,-.6,-.44,-.11,.26,-.22,-.44,-.09,-.05,-.05,-.25,-.07,-.39,.3,.22,-.46,.06,-.23,-.19,-.06,.11,-.12,.01,-.06,.13,.44,-.18,-.08,.06,-.3,-.37,.26,.39,-.3,-.23,-.3,-.17,-.42,-.03,-.18,-.2,-.44,-.17,-.09,.17,-.39,.01,-.25,-.01,-.28,-.28,-.34,.02,-.42,-.09,-.23,-.21,-.58,.14,.59,-.31,-.5,.54,-.31,-.36,.11,-.24,-.29,-.05,-.05,-.14,-.22,-.06,-.25,-.15,-.05,-.23,.08,-.11,.06,-.28,-.23,-.26,-.07,-.12,-.55,-.04,-.14,-.35,.41,-.36,-.27,.21,-.07,-.21,-.19,.39,-.38,.72,.65,-.5,-.16,-.13,-.04,-.31,.27,-.14,-.28,.04,.07,-.3,-.02,-.44,-.14,-.07,-.38,.09,-.14,-.13,-.06,-.11,-.24,-.18,-.3,-.4,-.59,-.26,-.3,.43,-.27,-.27,-.56,-.06,-.3,-.29,.03,.14,.15,-.65,-.21,-.18,.3,-.39,-.12,.25,-.21,.11,-.14,-.52,-.13,-.09,-.19,-.3,.05,.29,-.17,-.38,.02,-.07,-.38,-.28,.52,.07,-.28,-.21,-.3,0,-.02,-.23,-.02,-.02,-.5,-.33,.15,.13,.18,.08,.05,.07,-.51,-.1,.12,-.58,-.28,-.3,-.22,.09,-.3,-.48,-.52,-.11,-.39,-.16,-.36,.27,.12,-.18,-.12,-.45,-.46,.03,.24,.31,.11,-.12,-.1,-.31,.29,.14,0,-.21,.1,.12,.05,-.01,.12,-.18,-.16,.09,-.01,-.58,-.3,-.37,-.1,-.45,-.56,-.15,.42,-.48,-.23,-.17,.11,-.5,.08,.06,-.25,-.1,.12,-.05,-.57,.35,-.08,-.33,-.3,-.22,.08,-.19,-.08,-.14,.35,-.28,.08,.25,-.16,.16,-.42,-.04,-.15,-.16,.02,.3,-.04,-.07,-.26,-.32,-.6,-.35,-.23,-.07,-.08,-.63,.19,-.58,.08,-.26,-.32,-.14,-.27,-.08,.27,-.05,.09,-.1,-.21,.13,-.15,-.35,-.28,-.09,-.36,.41,.21,.03,-.31,.02,.55,-.44,-.3,-.26,-.02,.03,0,-.55,.11,.07,.62,-.38,-.03,-.4,-.09,-.5,.07,-.04,-.09,.08,-.14,-.28,0,-.42,.15,-.06,-.57,-.16,-.25,-.29,-.35,-.05,-.49,-.15,.14,-.03,-.13,0,-.17,-.36,-.55,.14,-.33,-.24,-.2,-.3,-.02,-.24,0,.04,-.54,-.02,.18,-.33,-.02,-.42,.1,-.58,-.59,-.36,-.33,.18,0,-.32,-.1,-.03,.73,-.19,-.19,-.34,0,-.41,-.13,-.58,-.07,-.57,-.14,-.22,-.66,-.3,-.44,-.3,-.05,-.16,-.59,-.33,.09,-.28,.09,-.36,-.48,-.17,-.56,-.23,-.12,-.21,-.45,-.15,.18,-.33,-.39,-.26,-.58,-.17,-.65,.17,.09,-.24,-.28,-.1,-.24,-.25,-.26,-.49,.59,-.5,.1,-.38,-.04,-.28,-.2,-.51,-.58,-.45,-.16,-.24,-.13,-.45,.53,.43,-.52,-.21,-.49,.03,-.62,-.29,-.05,.31,-.27,-.04,-.23,-.15,-.25,-.09,.31,-.07,-.35,-.52,-.19,.11,-.17,-.39,-.17,-.58,-.38,-.35,-.35,-.23,-.35,-.04,-.5,-.03,-.38,.11,-.09,-.14,-.19,-.13,.12,-.16,-.26,-.5,.11,-.6,-.38,-.22,-.33,-.26,-.32,-.16,-.25,-.31,-.54,-.02,-.16,.06,-.3,-.55,-.32,-.11,-.42,-.16,.13,-.55,-.49,-.36,-.42,-.09,-.16,-.13,-.34,-.21,-.45,-.13,-.42,-.51,-.48,-.01,-.54,.04,-.27,-.35,.14,-.37,.17,-.26,-.39,.06,-.29,.19,-.44,.2,-.68,-.32,.03,-.38,-.22,.06,-.61,-.01,.21,-.01,-.28,-.14,.1,-.34,-.25,.21,-.02,-.25,-.19,-.1,.14,-.2,-.11,-.23,.1,.22,-.02,-.65,-.55,-.46,-.14,-.22,.05,.11,-.2,-.52,.5,-.23,.46,-.29,-.31,-.35,-.03,.53,-.05,.12,-.03,-.3,-.17,-.54,-.19,-.2,-.4,-.61,-.21,-.26,.02,-.04,.12,-.34,.15,-.1,-.19,-.08,-.16,.02,-.5,.06,-.36,.52,0,-.12,.06,.16,.01,-.37,.33,.27,-.29,.21,.16,-.1,.07,-.32,-.41,.12,-.15,-.12,-.1,-.21,-.01,.59,.42,-.04,-.17,-.14,-.27,-.09,-.02,-.09,-.07,-.27,-.51,-.51,-.32,-.3,-.08,-.14,-.69,-.45,-.26,.33,-.55,-.24,-.41,-.49,.71,.18,-.1,-.28,.15,-.53,-.2,-.25,-.08,-.52,-.19,-.14,-.12,-.28,-.01,-.3,-.18,.13,-.23,-.41,-.05,-.37,-.07,-.1,-.38,-.29,-.44,-.04,-.35,-.15,-.11,-.08,-.01,-.16,-.24,-.24,.06,-.34,-.14,-.05,-.19,.09,-.14,.19,-.47,.25,.06,.23,.2,-.2,.01,-.46,.02,-.49,-.12,-.49,.03,-.14,.1,.09,-.29,.26,-.6,-.34,-.47,.03,.02,-.3,.11,-.23,.13,-.19,-.13,-.53,-.52,.06,.07,.05,-.34,-.22,.02,.33,.03,-.4,-.3,-.27,-.16,-.01,.38,-.41,-.47,-.47,-.32,-.1,-.01,-.22,-.13,-.07,-.11,-.32,.01,-.56,.05,-.32,-.32,.58,-.43,-.24,-.61,-.16,-.01,.34,-.29,.26,-.01,.08,-.19,.09,.09,-.31,-.38,-.05,-.48,-.01,-.21,.04,-.39,.16,.06,-.49,0,-.17,.03,.08,0,-.08,.1,-.6,-.03,-.16,-.23,-.16,.45,-.18,-.13,-.18,-.25,-.18,.01,-.36,-.44,-.29,-.23,.4,-.2,.01,-.33,-.34,-.27,-.24,-.14,.36,.05,-.06,.1,-.38,-.24,.05,.39,-.02,.13,-.07,-.28,-.17,-.39,-.21,-.63,-.06,-.43,.07,.44,.13,.28,.38,-.32,-.07,-.38,-.01,.29,-.21,-.07,-.02,-.3,-.53,-.23,-.34,.09,-.27,.15,-.28,-.32,-.22,-.14,-.44,-.13,-.28,-.38,-.31,-.2,-.13,-.23,-.13,-.17,-.31,-.13,.37,-.18,.26,-.53,.11,-.18,-.25,-.21,-.18,-.26,-.13,-.42,.08,-.13,.2,-.13,-.23,-.11,.01,0,-.39,-.11,-.26,-.35,.38,-.07,.66,-.62,-.24,-.3,-.18,-.26,-.32,.1,.6,-.04,.41,.41,-.2,-.11,.27,0,-.14,-.29,-.01,-.49];export{a as rvalData};
