const a=[.02,.02,-.1,-.06,-.13,-.16,-.12,-.65,-.22,-.3,.05,.27,.01,.2,.18,-.08,.02,.06,.17,-.12,.18,.76,-.17,.34,-.03,-.21,.92,-.1,-.12,1,-.37,.79,-.19,-.24,.33,-.07,.07,.23,-.14,-.02,.07,-.2,-.19,.05,-.21,.25,.25,.32,.6,-.62,-.15,.08,.22,-.09,-.61,.04,0,-.39,-.04,-.21,-.7,-.17,-.37,-.09,.28,.76,-.25,.36,.17,-.05,-.04,.06,-.81,.17,-.12,.07,.27,-.75,.09,.46,.14,-.18,.01,-.22,.31,.66,-.22,0,.17,-.01,-.48,-.04,-.61,-.02,.23,-.16,.17,.25,.15,-.81,.01,-.29,-.37,-.08,-.56,-.03,.24,.33,-.14,-.4,-.05,-.57,-.12,.06,.41,.08,.09,.77,.3,-.21,-.1,.29,-.14,-.11,-.21,-.54,-.07,.03,.53,.02,-.64,-.05,-.02,-.62,.2,.15,-.67,-.37,.84,-.07,-.35,-.14,-.49,-.22,-.1,-.08,.01,-.1,-.42,-.02,-.31,-.61,.02,-.01,-.66,-.46,.14,.21,.11,.22,-.59,-.45,-.17,-.54,-.64,-.83,-.16,.77,-.28,-.27,-.04,.55,-.66,-.48,-.36,.7,-.02,.87,-.87,-.11,.1,0,-.18,.17,-.61,-.2,.07,-.03,-.63,.12,-.02,-.76,.11,-.64,-.6,-.02,-.48,-.12,.04,.65,-.03,-.46,-.04,.05,.16,-.44,-.17,-.74,-.72,-.05,-.69,.25,.21,.09,-.35,-.5,-.04,-.68,.75,.56,-.38,-.46,-.23,-.08,-.36,-.03,-.75,.78,-.29,-.41,0,-.12,.2,-.04,.04,-.08,.25,.28,-.2,-.02,-.71,.31,-.57,-.68,-.63,-.46,.09,-.33,.07,-.03,-.51,.34,-.62,-.2,-.31,.12,-.01,-.42,-.2,.12,.08,-.33,-.52,-.33,-.3,-.52,.28,-.24,-.11,-.2,.58,.04,-.04,-.1,-.1,.01,.84,-.79,-.22,.59,-.82,.72,-.05,.04,-.46,-.26,.71,.05,-.38,.72,-.44,-.76,-.16,-.37,-.44,-.23,-.04,.31,-.35,-.44,-.14,.02,.73,-.05,.01,-.15,.3,-.55,-.45,.1,-.36,-.08,.1,-.11,.04,-.44,-.37,-.43,-.12,-.34,-.3,.29,.26,-.23,-.43,-.5,-.13,-.01,.01,-.5,.1,-.35,-.07,-.06,.75,.16,.63,-.37,-.14,.59,-.72,-.15,.09,.14,.11,-.1,-.09,-.81,-.17,-.52,-.51,-.61,-.08,-.46,.18,-.04,-.38,.2,-.25,.06,-.13,-.27,-.47,.34,.08,-.02,-.12,-.04,-.62,-.09,.63,.02,-.21,-.28,-.69,-.33,.01,-.27,.02,-.57,.06,.06,.06,-.14,.01,-.19,.16,.13,-.1,-.1,-.22,-.06,-.04,-.32,-.26,.01,.75,0,-.11,-.17,.38,-.29,-.21,-.28,-.64,.05,.23,-.24,-.42,-.23,-.1,.13,-.13,-.23,-.15,.04,-.34,.12,-.83,.04,-.17,.02,.56,-.06,-.17,.02,0,.03,-.58,-.32,-.57,-.23,-.21,-.03,-.72,-.04,-.12,-.18,-.1,-.47,-.44,-.33,-.46,.02,-.45,-.42,.03,-.24,-.2,.52,-.38,-.63,.25,-.13,.04,-.25,.79,-.02,-.42,-.42,-.18,-.27,.09,-.84,-.06,.08,0,.02,.32,-.05,.32,.02,-.08,.07,-.66,-.15,-.28,-.43,0,.82,-.5,.15,-.12,-.58,-.52,-.25,-.48,-.33,.01,-.04,.11,.26,.03,-.19,-.21,-.07,-.4,.06,-.21,-.53,-.53,-.18,-.25,-.11,-.29,-.12,-.14,-.15,.08,-.77,-.45,-.19,-.38,-.3,-.44,.46,-.49,-.53,-.81,-.21,.27,-.08,-.04,-.08,-.32,.02,.09,-.1,-.06,-.3,-.76,-.39,-.15,-.52,-.05,-.29,-.41,.02,-.37,.27,.18,-.46,.07,.84,.36,.01,-.31,.85,-.16,-.1,.7,-.02,-.12,.04,-.41,.06,.34,-.43,.11,.01,-.06,.6,-.26,-.58,-.07,-.05,-.08,.09,-.56,.05,-.19,-.04,-.22,-.16,-.17,-.01,.04,.46,-.72,.01,.41,.04,-.53,-.31,-.61,.26,-.03,-.41,.51,.1,-.08,.01,.14,-.29,-.6,.15,-.34,-.06,-.41,-.37,-.18,-.15,-.11,-.38,-.05,.89,-.57,.37,.02,-.02,-.07,.14,-.16,-.74,-.08,-.03,-.02,-.45,.2,.04,-.37,-.18,-.3,-.02,-.4,.32,-.37,-.37,-.41,-.4,.02,.26,.17,-.8,-.03,-.41,-.12,-.67,-.44,.77,-.35,-.29,.71,0,.09,-.29,-.42,-.27,.21,-.6,.16,.32,-.55,-.06,-.15,-.09,.34,.11,-.01,-.01,.01,-.2,-.05,-.44,.1,.05,.06,-.33,-.35,-.27,-.26,.12,.07,.95,-.36,-.49,-.49,-.12,.09,-.11,-.18,-.27,-.05,-.18,-.51,-.22,.23,-.25,-.22,-.45,-.02,.02,-.24,0,-.18,-.09,-.09,-.17,-.18,.15,-.26,-.64,-.58,-.15,-.06,.07,.08,.09,-.02,.89,-.32,-.5,-.31,-.36,-.07,-.06,-.16,.01,.1,.02,-.56,-.26,.1,-.05,-.13,.06,.16,.62,.2,-.17,.33,-.33,-.11,.17,-.58,-.7,.1,-.09,.05,-.13,.24,-.15,.66,.89,-.01,.05,-.28,.16,-.24,-.74,.13,.52,.38,-.33,-.04,-.12,.31,.55,-.13,.18,-.04,.82,-.12,-.2,.48,.09,-.28,0,.36,-.14,-.46,-.53,-.15,-.1,-.65,.19,-.45,-.61,-.04,-.55,-.11,.47,.13,-.29,-.07,-.44,-.64,-.79,.07,.66,.68,-.27,-.39,.38,-.17,.69,-.03,-.46,-.03,-.58,-.2,-.09,.25,-.35,.03,-.28,-.39,.25,-.42,.05,0,-.06,-.1,.47,-.29,-.65,.11,.64,.05,-.06,.23,-.12,-.58,-.01,-.05,-.02,.26,-.29,.18,.02,-.22,-.03,-.47,.17,-.04,.55,.14,-.4,-.04,.73,-.37,-.13,-.1,-.69,.47,-.24,.32,.74,-.75,.16,-.02,.79,-.38,.04,.16,-.12,-.42,-.43,-.65,.48,-.61,-.08,.28,.15,-.28,-.54,.4,-.03,-.48,-.54,-.12,-.01,-.07,-.64,-.56,-.47,-.01,-.27,.21,-.17,.89,-.2,-.05,-.28,.11,-.31,-.7,-.07,-.31,-.46,-.26,-.05,.14,-.63,-.15,-.08,.22,-.04,-.15,-.19,-.18,.31,.05,0,.02,-.11,.03,-.69,.05,-.69,-.18,.89,.51,-.35,-.35,-.32,-.06,-.53,-.6,-.07,-.54,.19,-.05,-.01,-.31,-.13,-.15,-.02,-.16,-.41,-.77,0,.1,-.21,-.25,.1,-.82,.05,-.26,-.2,.26,.19,-.32,-.27,-.27,-.11,-.59,-.06,.07,.1,-.55,-.04,-.18,.34,-.56,0,-.27,-.15,-.25,-.16,-.12,.11,-.41,-.09,-.37,-.08,-.14,-.28,.17,-.04,.43,-.15,.35,.26,-.22,-.02,-.22,-.36,-.86,-.26,-.17,-.63,.73,-.66,-.45,-.57,-.43,.04,.09,-.46,-.59,-.52,-.74,-.48,-.05,-.72,-.01,-.16,-.25,.08,-.06,-.08,.01,-.12,-.03,.41,.18,-.08,.01,.11,.26,-.63,-.44,.69,-.34,-.07,-.46,-.16,-.3,.09,-.31,-.06,-.24,-.58,-.04,-.45,-.32,-.17,.04,.09,-.58,.06,.02,-.41,-.11,-.61,.04,-.57,.09,-.04,-.29,0,.62,-.07,.04,-.66,.07,.03,.22,-.12,-.53,-.3,-.01,-.43,-.08,.17,.23,-.17,-.54,-.15,.74,.12,-.33,.01,-.78,-.41,.73,-.2,-.03,-.01,-.62,-.58,-.49,.03,.23,-.32,.06,-.36,-.4,-.12,-.05,.67,-.07,-.04,-.75,.49,-.16,.03,.74,-.32,0,-.24,-.19,.62,0,-.49,-.57,-.23,-.21,-.16,-.4,.34,-.58,-.19,-.08,-.25,-.11,-.01,-.22,.16,.14,-.81,-.84,0,.48,.43,-.02,.02,-.58,-.14,.17,.31,.28,.02,.26,-.02,-.05,.34,-.42,.25,-.56,-.19,-.06,.04,.05,-.12,-.22,-.56,-.15,-.27,-.15,.38,-.08,-.32,-.36,-.12,-.07,.42,-.18,-.02,-.05,.06,-.64,-.26,.05,-.57,-.08,-.53,-.14,-.03,-.23,-.41,.1,-.78,-.13,-.17,-.13,-.15,-.36,-.45,-.44,.13,.3,-.44,-.55,-.02,.17,-.01,-.27,.03,-.62,.08,.17,-.44,.13,-.03,0,.13,.21,.03,.02,-.41,-.19,.24,-.19,.13,.07,-.37,-.38,.21,.38,-.39,-.05,-.22,-.34,-.48,-.2,-.04,-.01,-.75,-.12,.22,.11,-.35,.03,-.48,.07,-.26,-.11,-.47,-.18,-.36,-.21,-.12,-.12,-.41,-.04,.84,-.38,-.36,.76,-.28,-.36,.07,-.13,-.36,-.21,.02,.02,-.11,.12,-.15,-.11,-.01,-.11,-.06,.14,.02,-.31,-.08,-.32,-.15,-.08,-.4,.09,-.11,-.46,.37,-.55,-.4,.27,-.05,-.22,-.33,.52,-.38,.9,.8,-.71,.11,-.03,.02,-.36,.31,-.32,-.49,-.05,.16,-.37,-.06,-.58,-.12,-.07,-.64,-.08,-.01,-.03,.14,.09,-.04,-.16,-.21,-.36,-.62,-.36,-.65,.28,-.34,-.27,-.62,-.13,-.49,-.23,-.17,.21,.34,-.8,-.58,-.06,.42,-.46,0,.03,-.37,-.09,-.09,-.62,-.26,.06,-.14,-.39,-.18,.07,-.3,-.43,-.39,.07,-.29,-.15,.77,.23,-.17,-.41,-.2,-.02,-.02,-.56,.06,.03,-.43,-.4,-.13,.12,.3,-.18,-.28,.16,-.65,.08,.02,-.78,-.54,-.29,-.24,-.32,-.44,-.56,-.68,-.3,-.56,-.28,-.3,-.06,-.11,-.22,-.29,-.41,-.64,.02,.31,.2,-.16,-.41,-.05,-.43,.07,-.1,-.17,-.2,-.13,.22,-.22,-.25,.17,-.45,-.21,.07,.04,-.67,-.31,-.36,-.27,-.49,-.74,.03,.31,-.66,-.03,-.09,.09,-.69,.06,.31,-.04,-.17,.31,-.13,-.78,.45,-.1,-.3,-.15,-.15,-.26,-.22,.13,-.28,.31,-.22,-.06,.19,-.05,-.03,-.67,-.02,.06,-.02,.1,.2,.02,0,-.37,-.31,-.54,-.26,-.24,-.07,.17,-.75,-.08,-.56,.33,-.42,-.26,-.01,-.43,.03,.1,.01,-.1,.04,-.19,.13,-.22,-.17,-.16,-.11,-.62,.47,-.04,.15,-.43,.04,.55,-.57,-.31,-.26,-.16,.03,-.09,-.74,.22,-.13,.69,-.4,.03,-.52,-.25,-.6,-.04,-.45,-.19,-.12,-.25,-.39,-.08,-.64,-.05,-.08,-.57,-.37,-.34,-.48,-.32,-.11,-.36,-.02,-.03,-.12,-.23,-.04,-.46,-.23,-.79,.17,-.53,-.06,-.44,-.31,0,-.18,-.05,.19,-.65,-.15,-.03,-.26,-.19,-.29,.14,-.51,-.55,-.49,-.32,.21,-.06,-.26,-.04,-.01,.72,-.34,-.32,-.56,-.21,-.44,.03,-.47,-.12,-.78,-.05,-.18,-.71,-.2,-.46,-.28,-.19,-.38,-.57,-.34,.15,-.34,-.13,-.44,-.3,-.05,-.48,-.34,.17,-.28,-.39,-.03,.24,-.2,-.39,-.42,-.73,-.17,-.43,.38,.07,-.17,-.14,-.23,-.33,-.12,-.28,-.65,.64,-.63,.31,-.45,-.02,-.25,-.29,-.46,-.76,-.64,.13,-.12,-.13,-.31,.5,.43,-.61,-.22,-.61,.17,-.76,-.11,0,.18,-.3,-.1,-.48,-.02,-.1,.04,.25,.04,-.61,-.66,-.08,-.08,-.14,-.47,-.32,-.73,-.49,-.51,-.38,-.11,-.34,-.02,-.57,.01,-.41,-.02,.02,-.04,-.26,0,-.11,-.15,-.16,-.62,-.02,-.61,-.33,-.31,-.39,-.33,-.29,-.33,-.14,-.43,-.63,.01,-.1,0,-.31,-.44,-.38,-.16,-.19,-.31,.19,-.46,-.77,-.49,-.49,0,-.05,0,-.3,-.15,-.35,.1,-.62,-.58,-.51,.05,-.64,.02,-.33,-.44,.07,-.37,.04,-.07,-.48,.06,-.3,.13,-.65,.2,-.55,-.13,.1,-.5,-.58,.11,-.51,-.31,.18,.01,-.19,-.08,.31,-.6,-.34,.3,.18,-.27,-.22,-.03,.1,-.24,-.27,-.24,.05,.16,.03,-.5,-.36,-.47,-.02,-.09,.2,.12,-.04,-.41,.56,-.36,.54,-.26,-.31,-.41,.11,.32,.08,.13,-.25,-.33,-.01,-.53,-.24,-.38,-.57,-.67,-.23,-.09,-.18,-.06,-.1,-.28,.17,.06,-.15,-.02,-.03,.11,-.53,.01,-.35,.87,-.01,.08,-.09,.09,-.05,-.58,.21,.29,-.36,.1,-.05,.02,.14,-.42,-.5,-.08,-.07,.03,-.19,-.07,-.3,.88,.49,.05,-.22,-.02,-.16,-.06,.16,-.14,-.28,-.37,-.69,-.34,-.29,-.35,-.06,-.18,-.77,-.6,-.5,.25,-.54,-.17,-.32,-.41,.78,.31,-.17,-.23,-.13,-.65,-.06,-.39,.06,-.43,-.08,.03,.06,-.27,-.04,-.38,-.13,.18,-.21,-.5,-.1,-.51,-.09,.03,-.48,-.38,-.5,-.16,-.44,-.08,0,-.07,.02,-.18,-.12,-.13,.07,-.45,-.36,-.22,-.2,.01,-.01,-.02,-.63,.26,.05,.15,.12,-.08,-.02,-.58,-.08,-.53,-.15,-.35,-.19,-.42,.15,.06,-.3,-.05,-.72,-.45,-.6,-.05,-.22,-.17,-.11,-.25,.12,-.03,-.48,-.73,-.78,0,-.02,-.14,-.21,-.01,-.14,.03,.05,-.42,-.36,-.33,-.08,.07,.47,-.41,-.74,-.33,-.13,-.01,.01,-.25,0,-.2,-.04,-.2,-.17,-.38,-.07,-.25,-.2,.81,-.63,-.47,-.77,-.38,-.19,.29,-.34,.1,-.11,.1,-.04,-.11,.08,-.22,-.69,0,-.54,-.15,.13,.02,-.31,.43,.22,-.44,.05,-.09,.03,.11,-.29,-.04,.07,-.52,-.29,.05,-.11,-.06,.48,.04,.12,-.07,-.29,-.18,-.25,-.38,-.52,-.21,-.45,.35,-.07,.04,-.03,-.18,-.28,-.38,-.05,.4,.08,.08,.29,-.6,-.06,-.21,.44,.14,.32,-.06,-.27,-.05,-.26,-.07,-.65,.09,-.64,.07,.56,-.11,.21,.4,-.28,.03,-.36,.01,.28,-.49,.17,.07,-.23,-.47,-.17,-.33,-.07,-.33,.3,-.22,-.32,-.07,.11,-.43,-.2,-.28,-.17,-.63,-.21,-.01,-.24,-.24,-.02,-.19,.17,.4,-.03,.47,-.51,.19,-.07,-.16,-.16,-.03,-.17,-.3,-.41,.24,-.21,.23,-.04,-.09,.04,-.14,-.03,-.41,-.11,-.16,-.3,.34,-.04,.73,-.66,-.15,-.41,-.17,-.17,-.38,-.17,.84,-.01,.5,.24,-.1,-.27,.32,-.23,-.1,-.15,-.01,-.54];export{a as rvalData};
