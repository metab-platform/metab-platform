const a=[.04,-.01,-.18,-.05,-.16,.18,-.05,-.25,-.09,-.3,.03,.44,-.07,.17,.07,-.05,-.18,.2,.14,.01,.16,.78,-.1,.13,.05,-.1,.78,-.11,.08,.72,-.21,.82,-.08,-.27,.4,.04,-.03,.07,-.11,-.13,.03,-.17,-.14,.11,-.17,.13,.15,.48,.64,-.4,-.08,.17,.1,-.15,-.24,-.12,.18,-.29,.03,-.17,-.52,-.06,-.31,-.06,.43,.62,-.13,.18,.15,-.02,-.17,0,-.54,.12,-.17,.01,.16,-.54,-.06,.44,.06,-.15,0,-.12,.4,.72,-.09,.14,.22,-.1,-.29,-.01,-.27,-.01,.31,.16,.06,.12,.52,-.56,-.16,-.22,-.09,-.23,-.28,.01,-.01,.08,.02,-.22,-.23,-.3,-.13,-.04,.76,.11,.11,.74,.53,-.07,-.12,.27,-.05,.1,0,-.29,-.07,.39,.34,-.04,-.18,.25,-.03,-.46,.09,.28,-.4,-.32,.69,-.1,-.2,-.2,-.31,-.1,-.06,.03,.04,.29,-.19,.11,-.25,-.49,.06,-.05,-.27,-.11,.23,.23,-.05,.08,-.24,-.17,-.16,-.31,-.29,-.6,-.16,.64,.14,-.21,.06,.46,-.28,-.24,-.08,.72,.12,.69,-.59,-.06,-.07,.1,-.04,-.05,-.34,-.03,.02,-.02,-.34,.24,-.03,-.41,.19,-.4,-.42,.07,-.24,-.01,.01,.85,-.24,-.32,-.07,0,.14,-.19,-.06,-.34,-.45,.05,-.32,.14,.34,.03,-.26,-.38,-.01,-.33,.72,.47,-.05,-.21,-.1,-.11,-.04,-.08,-.32,.75,.03,-.17,-.14,-.09,.11,-.15,0,-.04,.08,.08,-.1,-.04,-.5,.15,-.22,-.35,-.28,-.24,.15,-.4,.13,-.01,-.23,.48,-.25,.29,-.14,.1,.01,-.35,-.14,-.06,-.1,-.11,-.35,-.18,.09,-.26,.18,-.06,-.13,-.2,.71,-.1,-.07,-.2,-.03,.05,.67,-.56,-.25,.64,-.5,.46,-.24,.03,-.02,-.11,.48,-.02,-.11,1,-.09,-.5,-.07,-.17,-.16,-.14,-.13,.21,-.4,-.25,-.06,.01,.74,-.15,.09,.09,.69,-.42,-.04,-.05,-.31,-.2,.12,-.07,.48,-.24,-.28,-.2,-.22,-.33,-.19,.49,.15,-.14,-.22,-.08,.03,.14,.35,-.07,.18,-.07,.25,-.16,.6,-.03,.52,-.04,.08,.79,-.44,-.1,.09,.1,-.04,-.15,-.1,-.46,-.11,-.22,-.26,-.42,.04,-.02,-.02,-.2,-.2,.08,-.23,-.1,-.12,-.32,-.06,.16,.1,-.03,.03,-.11,-.47,-.23,.75,-.19,-.22,.13,-.51,.01,.11,-.13,-.08,-.29,.13,.2,.1,-.2,.11,.18,.03,.2,.07,.05,-.2,-.05,-.1,-.22,-.17,-.02,.7,-.09,.06,.06,.46,.1,-.23,-.16,-.41,.04,.09,-.17,-.24,.06,-.22,.1,.15,-.21,.14,-.02,-.15,.25,-.5,.19,-.06,.02,.66,-.08,-.04,-.03,.01,-.03,-.25,-.1,-.22,.2,-.08,.04,-.47,-.28,-.12,0,-.1,-.24,-.19,-.27,-.32,0,-.56,-.11,-.01,-.07,-.15,.36,-.27,-.4,.17,.21,-.11,.06,.8,-.09,-.1,-.23,-.26,-.07,0,-.59,.04,.43,-.06,.16,.24,-.12,.03,-.08,-.08,-.04,-.32,.04,-.26,-.4,.07,.68,-.31,-.02,.06,-.25,-.66,.06,-.06,.02,.25,-.19,.13,.44,.18,-.04,-.21,-.01,-.18,-.03,0,-.14,-.17,-.01,-.15,-.13,-.26,-.07,.13,.08,.12,-.59,-.29,.05,-.34,-.02,-.63,.62,-.28,-.26,-.53,-.08,.19,-.06,.29,.14,-.22,.06,.16,-.12,-.13,-.11,-.38,-.18,-.27,-.33,.02,-.19,-.07,.27,.11,.5,.13,-.25,.07,.72,.45,.15,-.09,.73,-.28,.03,.39,-.06,-.19,-.14,-.32,.03,.27,-.19,-.1,.04,-.17,.63,.09,-.18,-.15,-.14,-.03,-.03,-.27,.1,-.2,-.17,-.31,-.05,-.02,-.11,-.03,.7,-.58,.06,.46,.06,-.28,.04,-.32,.13,-.06,-.38,.59,-.02,-.12,.13,.12,-.3,-.22,.05,-.14,-.17,-.19,-.2,.05,-.23,-.1,-.21,.05,.71,-.2,.58,.01,.09,-.13,.03,-.02,-.38,-.05,-.02,-.01,-.21,.01,-.02,-.05,.03,.06,.04,.05,.32,-.43,-.11,-.19,-.19,-.02,.08,.15,-.54,.34,-.25,.07,-.47,-.27,.74,-.36,-.2,.76,-.01,.12,-.11,.04,-.2,.4,-.31,.06,.18,-.2,-.05,.03,.04,.12,-.11,-.02,.04,0,-.11,-.01,-.22,.08,.13,.07,.06,-.17,-.21,-.22,.19,-.07,.7,-.06,-.24,-.35,-.19,.14,-.15,-.29,.16,-.13,-.11,-.16,-.14,.1,-.16,-.05,0,-.04,.23,.17,0,-.2,.09,-.11,-.11,-.24,.21,-.14,-.28,-.31,-.17,.15,-.09,.01,.16,0,.73,-.17,-.22,-.16,-.07,.04,-.11,.07,.24,.01,.01,-.22,-.05,-.01,-.06,-.06,.1,.2,.58,.11,-.1,.23,-.04,.03,.13,-.32,-.37,0,.06,.03,-.18,.27,.02,.78,.74,-.03,.11,-.17,.03,.09,-.49,.07,.8,.42,-.11,-.11,.02,.68,.47,.07,.09,-.08,.68,.07,-.03,.48,-.08,-.16,.04,.34,.03,-.02,-.14,-.13,-.08,-.3,.15,-.17,-.34,.01,-.37,-.12,.73,.23,-.13,-.13,-.16,-.32,-.58,.42,.64,.76,.16,-.16,.13,-.08,.53,-.07,-.34,.07,-.38,-.03,-.07,.13,-.25,-.06,.03,-.24,.32,-.25,.1,.18,-.03,.04,.63,0,-.32,-.04,.58,-.06,0,.05,-.03,-.16,.05,-.24,-.11,.2,-.1,.08,-.04,.08,-.07,-.29,.29,.05,.62,-.08,-.15,-.08,.74,-.17,-.1,-.04,-.35,.32,-.25,.04,.76,-.49,.11,.2,.73,-.25,.17,.15,.08,-.22,-.22,-.29,.66,-.37,-.16,.58,.11,.14,-.25,.3,.12,-.22,-.22,.15,.11,-.1,-.29,-.21,-.28,.09,-.04,.18,-.07,.75,-.2,.04,-.26,-.01,-.22,-.36,.33,-.12,-.22,-.22,.05,.17,-.31,.01,-.17,.11,-.11,-.17,-.16,.14,.26,.07,-.18,.03,.01,.01,-.31,.07,-.37,-.24,.74,.57,-.2,-.37,.18,.05,-.2,-.26,-.06,-.16,.16,.03,.02,-.12,-.18,-.05,-.14,.05,-.22,-.39,-.17,.09,-.14,-.18,.04,-.5,.16,-.2,-.1,.17,.57,0,-.23,.06,-.08,-.33,.05,.11,-.08,-.22,-.04,.21,.73,-.2,-.13,-.15,.05,-.15,.17,.05,.11,-.17,-.03,-.15,-.06,-.13,.11,.3,-.15,.32,.21,.13,.19,-.03,-.25,.16,.07,-.55,-.03,-.18,-.25,.68,-.3,-.12,-.21,-.25,.05,.11,-.22,-.43,-.22,-.35,-.23,-.15,-.3,-.23,-.08,-.29,.16,-.01,-.05,-.02,-.13,-.1,.18,.1,-.11,-.04,.18,.19,-.36,-.04,.55,.09,-.08,-.29,-.02,.12,.05,-.25,-.01,-.31,-.22,-.13,-.13,-.23,-.08,0,.09,-.29,.07,.19,.03,-.11,-.35,.03,-.26,.1,-.14,.06,-.07,.34,-.1,-.01,-.3,.13,.06,.21,-.09,-.41,-.25,.15,-.16,.07,.16,.14,-.02,-.21,.02,.55,.13,-.28,.1,-.69,-.13,.61,-.19,-.16,-.04,-.32,-.42,-.21,-.03,.54,-.11,-.12,-.02,-.18,-.21,-.04,.85,-.17,-.03,-.54,.47,-.28,.06,.8,-.13,-.01,-.05,-.23,.8,-.19,-.29,-.15,.15,-.06,.03,0,.27,-.41,-.17,.01,-.08,-.13,.15,-.01,.52,.09,-.47,-.6,.02,.63,.38,.13,.06,-.37,-.06,.18,.08,.18,-.14,.22,-.04,-.07,.17,-.24,.13,-.34,-.06,-.16,.01,.18,-.13,-.04,-.09,-.07,.12,-.02,.49,-.05,-.11,-.18,-.08,.04,.18,-.22,-.1,-.06,.34,-.49,-.08,.1,-.26,-.06,-.27,-.06,-.06,-.07,-.19,.2,-.56,.03,.05,-.09,-.21,-.28,-.35,-.3,.06,.22,-.03,-.29,-.18,.01,-.05,-.29,0,-.24,.17,.3,-.37,-.1,-.07,-.09,.02,.18,-.12,.11,-.06,.14,.56,-.08,.19,.04,-.27,-.18,.1,.44,-.15,-.05,-.19,.1,-.25,.16,-.11,-.14,-.33,-.1,-.01,-.05,-.25,.1,-.1,.04,-.16,-.28,-.29,.12,-.3,-.08,-.08,-.08,-.23,.15,.62,-.04,-.21,.53,-.15,-.3,.13,-.17,-.25,-.08,-.02,.03,-.08,.03,-.07,-.15,0,-.08,.06,.04,.11,-.13,0,-.15,-.13,.08,-.23,.18,-.04,-.16,.34,-.21,-.2,.21,.02,-.16,.07,.41,-.15,.71,.69,-.42,.08,-.09,-.05,-.16,.1,-.22,-.23,.08,.19,-.1,-.18,-.27,.18,-.03,-.29,.13,.01,-.03,-.06,-.01,-.04,-.11,-.14,-.27,-.33,-.11,-.23,.68,-.21,-.14,-.47,.03,-.22,-.24,-.11,.21,.15,-.63,-.1,-.1,.38,-.26,-.03,.12,-.13,.29,-.07,-.48,-.09,.01,-.16,-.27,.22,.04,-.33,-.13,-.02,-.05,-.26,-.21,.6,.13,-.13,-.13,-.02,.07,.05,-.1,.08,.06,-.3,-.2,-.07,.08,.3,.07,-.09,.07,-.33,.02,.06,-.48,-.17,-.12,-.12,-.05,-.11,-.35,-.35,-.06,-.23,-.01,-.1,0,.29,-.12,.08,-.28,-.24,.08,.17,.31,.21,-.08,-.1,-.19,.38,.31,.13,-.08,.18,.15,.19,.2,.13,-.14,-.16,.01,.04,-.4,-.14,-.18,.03,-.15,-.38,-.03,.41,-.3,-.1,-.1,-.11,-.39,0,-.04,-.21,.05,.1,.03,-.53,.23,.08,-.18,-.13,-.02,.26,-.13,-.02,-.18,.14,-.15,-.08,.33,.01,.09,-.44,-.16,.05,-.04,.02,.26,.08,.03,-.12,-.23,-.39,-.26,-.11,.07,.15,-.51,.11,-.39,.2,-.15,-.19,-.01,-.1,.03,.14,-.01,.14,.06,-.07,.2,-.08,-.24,-.12,.07,-.37,.57,0,.08,-.28,.25,.55,-.21,-.14,-.29,-.16,.04,.15,-.39,.21,.16,.72,-.29,0,-.25,.03,-.25,-.11,.1,-.07,-.14,-.03,-.05,.14,-.23,.2,-.08,-.33,.03,-.19,-.13,-.18,-.05,-.27,-.02,.12,-.09,-.09,.13,-.24,-.3,-.49,.16,-.22,-.15,-.05,-.17,.09,-.17,-.07,.05,-.36,-.13,-.11,-.24,-.2,-.26,.09,-.37,-.38,-.21,-.25,.02,.07,-.15,-.01,-.02,.68,.02,-.11,-.23,.16,-.32,-.03,-.31,.07,-.44,-.03,-.06,-.46,-.26,-.26,-.15,.1,-.13,-.5,-.13,-.02,-.11,.18,-.19,-.39,-.1,-.34,-.1,-.15,-.11,-.29,-.12,.06,-.29,-.3,-.12,-.41,.01,-.53,.21,.2,-.1,-.22,0,-.09,-.08,-.22,-.39,.57,-.38,.13,-.27,-.02,-.18,-.15,-.36,-.49,-.32,-.14,-.13,-.09,-.31,.63,.41,-.36,-.21,-.31,.17,-.57,-.16,.02,.34,-.09,.15,-.18,-.09,-.2,-.01,.45,-.01,-.3,-.38,-.13,-.07,-.23,-.3,-.02,-.46,-.23,-.17,-.19,-.14,-.21,-.08,-.25,-.11,-.22,.03,-.15,-.09,0,-.1,.1,.05,-.3,-.36,-.03,-.49,-.31,-.12,-.17,-.16,-.17,.06,-.17,-.14,-.39,.23,-.21,-.03,-.12,-.47,-.21,.09,-.41,.08,.08,-.36,-.39,-.2,-.21,-.13,-.06,-.01,-.18,-.04,-.24,-.04,-.27,-.37,-.29,.12,-.35,-.01,-.13,-.18,.02,-.28,-.01,-.2,-.27,.11,-.2,.08,-.4,.22,-.55,-.1,-.11,-.23,-.16,-.1,-.53,.03,.12,.05,-.05,-.03,.16,-.21,-.1,.12,.03,-.12,-.05,.03,.11,-.23,0,-.06,.01,-.02,-.04,-.53,-.45,-.35,-.05,-.18,.03,.15,-.17,-.46,.43,-.19,.52,-.08,-.28,-.25,.12,.37,-.02,.06,.08,.04,-.06,-.48,-.09,.02,-.31,-.52,-.08,-.02,.07,-.16,.02,-.25,.17,-.05,-.09,.14,-.01,.08,-.48,.16,-.22,.58,-.03,-.08,.18,.27,-.25,-.28,.1,.2,-.3,-.01,.05,-.01,.19,-.18,-.41,-.07,-.06,-.06,-.03,-.18,.08,.6,.35,0,-.07,-.07,-.16,-.14,-.09,.09,-.13,-.11,-.36,-.26,-.27,-.2,.04,0,-.6,-.3,-.36,.24,-.51,-.11,-.34,-.19,.72,.02,.03,-.21,.23,-.32,-.08,-.16,.07,-.4,-.22,-.09,-.04,-.13,-.04,-.19,-.29,.08,-.13,-.18,-.28,-.22,.05,-.03,-.24,-.12,-.26,-.07,-.09,-.12,-.1,-.06,.07,-.29,-.11,-.03,.05,-.26,-.05,.14,-.02,-.1,0,.33,-.41,.14,-.11,.26,.3,-.17,-.05,-.27,.13,-.35,.01,-.33,.21,-.13,.25,-.07,-.15,.02,-.48,-.23,-.22,.09,.09,-.26,.13,-.12,.11,-.08,-.11,-.34,-.38,.05,.04,.22,-.33,-.12,-.1,.05,.03,-.27,-.15,-.17,.05,-.07,.36,-.29,-.36,-.32,-.09,-.08,.09,-.1,-.01,-.21,.13,-.14,-.07,-.23,.11,-.18,-.22,.67,-.36,-.17,-.51,-.06,-.17,.24,-.39,.18,-.18,.06,-.1,-.07,.05,-.17,-.31,-.1,-.37,-.07,.06,-.02,-.25,.23,.14,-.18,.04,.03,-.07,.05,.03,-.03,.16,-.35,-.09,-.05,-.1,-.13,.52,-.14,-.07,-.06,-.09,-.03,-.18,-.28,-.36,-.17,-.11,.44,-.14,-.01,-.27,-.29,-.14,-.1,-.08,.64,.19,.05,-.04,-.29,-.06,.11,.2,.15,0,-.13,-.22,-.09,-.41,-.12,-.47,-.05,-.28,.11,.5,.12,.37,.35,-.3,.02,-.15,-.18,.21,-.02,.05,.17,-.23,-.28,-.11,-.09,.07,-.16,.15,-.18,-.14,-.11,.05,-.36,-.09,-.12,-.29,-.25,-.09,-.07,-.1,-.12,-.07,-.16,-.06,.44,-.09,.25,-.3,.01,-.09,-.14,-.13,-.04,-.22,.08,-.22,.11,.12,.08,-.03,-.02,-.02,.16,-.05,-.21,.04,-.21,-.23,.33,-.06,.75,-.47,-.18,-.19,-.01,-.09,-.2,.16,.63,.11,.49,.27,-.14,-.16,.37,.08,-.03,-.03,.08,-.32];export{a as rvalData};
