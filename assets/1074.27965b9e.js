const a=[-.38,.35,.85,-.04,.79,-.11,.15,-.29,.05,.31,.48,.13,-.05,-.74,.65,-.03,.17,.01,-.25,-.13,-.03,-.16,.06,.43,.41,.64,-.06,.06,.2,.03,.46,-.18,.8,.18,.26,.17,.86,.5,.21,.72,.01,.69,.51,-.04,.12,.37,.08,-.24,.01,.06,.05,0,.41,.71,.32,.33,.28,.01,.16,.69,.25,.76,.66,-.1,.14,.02,.69,.54,-.19,-.07,-.03,.61,.1,-.12,.75,.14,-.08,.19,.57,-.04,-.46,.49,-.14,.57,-.13,-.06,.49,.04,-.73,.6,-.06,.04,-.13,-.63,.1,-.2,-.69,-.02,-.16,.17,-.03,.68,.37,-.06,.36,.05,-.02,-.07,.65,.49,-.06,.18,-.07,-.66,-.07,.7,.1,-.07,-.37,.34,-.09,-.11,.28,-.21,.06,.34,.67,-.41,.04,.84,-.35,-.52,-.21,.03,.45,-.26,-.12,.13,-.01,-.03,.71,.06,.42,.49,0,-.17,0,-.21,.47,-.2,.69,-.26,.02,.02,-.39,-.12,-.1,.1,-.17,.55,-.11,.55,.08,.14,-.13,.15,.52,-.09,-.2,.61,-.02,-.06,-.25,-.39,.52,.01,-.07,.08,.08,.81,-.11,.08,.11,.88,.4,-.18,.18,.22,.05,-.19,-.16,-.15,.21,.32,.6,.86,.58,.18,.03,-.1,.15,.34,.81,0,-.51,.49,-.01,.06,.07,-.13,-.36,.61,0,.66,.03,.25,-.07,-.27,.05,-.14,.34,.26,.3,.78,.3,.84,-.29,0,.22,.13,-.06,-.12,.39,.84,.15,.04,.6,.18,-.08,.02,.2,.6,-.46,-.3,-.16,-.41,.13,.13,.24,-.04,-.07,-.15,.29,.05,.74,.01,.21,.2,.06,.84,.15,-.15,.18,.72,-.22,.33,-.08,.52,.09,.42,.09,-.36,.8,.82,.64,-.06,.18,.12,.72,-.02,-.01,-.07,.28,-.6,.02,.51,.11,.75,.01,-.03,-.24,.1,.66,-.33,-.21,.53,.22,-.24,-.03,.18,.07,.87,-.04,-.18,.18,.27,-.09,.47,-.18,.29,.57,-.07,-.16,0,.23,.17,-.02,-.13,.8,.37,.53,-.01,.55,.67,-.12,-.04,.71,-.2,.07,0,-.61,.38,.22,.07,-.15,.04,.02,.3,-.23,-.13,.22,.57,-.25,-.15,.82,.87,.12,.01,.48,-.08,.63,-.39,.11,-.04,-.49,.34,.33,.06,.74,.83,.22,.13,-.07,-.14,-.05,-.66,.09,.86,.18,.09,.19,-.27,-.01,-.32,.25,.02,.09,.52,.04,-.04,.06,.03,.1,.13,-.03,.39,-.01,.05,.79,.83,.8,-.09,.2,.03,.01,.87,-.32,-.11,-.19,.07,-.08,-.18,.8,.17,.06,.15,.5,.78,.51,.45,.77,-.57,-.31,.76,-.02,.1,.68,.7,-.01,-.5,.06,.74,.06,-.03,-.03,.83,.87,.11,-.01,-.42,-.49,-.35,.28,.15,-.18,.75,-.39,.74,.82,.55,.55,.45,.48,-.15,.18,.22,.9,.67,-.24,-.36,.09,.25,-.77,-.16,-.15,-.13,-.1,.85,-.18,.41,.74,.72,-.71,.13,.02,.02,-.39,-.13,-.35,.73,.02,.87,.57,.16,-.12,.66,.59,-.14,.89,-.07,.56,.69,.73,-.08,.22,-.15,.32,-.35,.43,.75,.01,.13,-.46,-.23,.81,.77,-.08,-.13,.63,-.33,-.05,-.16,.63,.44,.64,-.23,-.15,.61,.8,.24,.65,-.17,.58,.01,.2,0,.13,-.27,.06,.53,0,.85,-.03,-.06,.32,0,.29,.43,.1,.57,-.11,-.11,-.19,-.24,-.07,.05,.01,.3,-.46,.23,.16,-.05,-.16,.14,-.06,-.22,.07,.17,.66,-.11,.06,.84,.85,.86,.54,-.14,-.29,-.34,-.26,-.07,.77,0,-.03,-.34,-.17,-.21,-.12,.05,.13,-.06,.75,.8,.03,-.39,.7,.88,-.19,-.32,.11,.17,-.05,.21,.56,-.11,.35,.61,.87,.54,-.01,.85,-.24,.01,.05,.73,-.34,-.65,.62,.82,.19,.05,.62,.75,.81,.07,.71,-.02,-.09,-.36,.21,-.12,.07,.78,-.09,-.13,-.14,-.07,.88,-.38,.06,.08,-.23,-.15,.05,-.11,-.21,-.01,.02,-.08,.62,-.45,-.16,-.37,-.25,.05,.32,.31,.68,-.24,-.31,-.12,-.03,.64,-.27,.07,.21,.62,-.51,.62,.12,.33,-.06,-.68,-.17,.84,.66,.1,.5,-.06,-.17,-.11,.87,.53,.81,-.03,.19,.1,-.02,-.14,.33,.56,.14,.06,-.04,-.01,.33,-.35,.55,.73,-.47,.15,-.15,-.42,.68,.7,-.27,.18,-.5,.62,.68,-.42,-.09,-.22,-.32,-.21,-.01,-.48,.45,.14,.59,-.54,.56,-.29,.07,.7,.03,-.03,-.19,.49,-.01,-.06,.68,-.21,.21,-.02,-.09,-.16,-.31,.12,-.11,-.18,-.3,.63,.84,-.09,.64,.59,-.26,-.12,-.18,.63,-.54,.19,.83,.13,.17,-.16,.83,-.18,.11,-.11,.46,.6,-.26,.1,-.14,-.42,.11,.84,-.17,.32,-.07,-.05,-.08,.04,.7,.1,-.07,.36,.62,.05,.35,-.08,.66,.15,.37,.65,.66,-.18,-.11,-.06,-.33,-.16,.73,-.01,-.09,-.38,.03,-.34,.8,-.02,.87,-.01,.12,.65,.81,.58,.26,.13,.05,.02,-.31,-.25,.52,.5,.73,-.06,.86,.45,-.46,.32,-.36,.23,-.37,.73,.64,.29,.04,-.12,0,-.03,-.04,-.09,.83,-.27,.45,-.29,-.66,-.05,.08,.82,.11,-.08,-.36,.64,-.09,.83,-.07,.11,-.08,-.09,-.14,.81,-.15,-.11,.01,.01,-.06,.01,.2,-.12,.5,.68,-.13,-.36,-.04,.74,.03,-.04,.19,.14,-.2,-.02,.21,-.12,.04,.09,-.02,-.09,-.17,-.14,.35,.82,-.14,-.28,-.4,-.27,-.3,.05,-.23,-.48,-.47,.12,-.15,-.09,-.33,-.05,.08,-.01,-.11,.07,.04,.53,.11,.74,.79,-.11,-.11,.08,.77,-.4,.7,-.64,-.61,.18,.69,.01,-.37,-.16,.54,.68,.19,-.05,.08,-.05,-.04,.52,.06,-.1,.11,-.19,-.09,.08,.09,-.23,.62,.14,.05,-.19,-.44,-.01,-.36,-.16,-.32,.4,.77,.8,0,.87,.69,-.08,-.14,.83,.71,.7,.57,-.79,.12,-.02,.43,.73,.11,.02,-.14,.43,-.08,.04,-.33,.82,.11,.13,-.45,-.12,-.21,-.12,-.18,.14,.75,-.07,.64,.03,.64,.11,-.36,-.1,.57,.05,-.06,.12,-.68,-.24,.11,-.42,.55,-.68,.51,-.16,-.2,0,.03,.59,.76,-.34,-.23,-.25,-.01,-.41,-.45,.13,.1,.08,.23,-.39,-.11,-.36,-.17,-.16,0,.02,.01,.1,-.1,-.08,.14,.06,.1,.18,-.01,.22,-.15,.03,-.12,.33,-.09,.1,-.28,-.22,.12,-.44,-.45,.12,.54,-.02,.35,.3,.15,-.12,.79,-.03,.19,.01,-.23,-.07,.21,.03,-.13,.31,.72,-.36,.34,-.07,-.16,.89,-.17,-.14,-.08,-.11,.06,-.25,-.09,.41,-.12,.46,.34,-.04,.13,-.17,-.2,-.12,-.25,.63,.1,-.01,.06,.5,.08,.02,-.05,.05,.76,-.1,.11,.06,.15,1,-.05,.34,.84,-.28,.44,.77,.05,-.15,.05,-.02,.15,.21,0,-.24,-.14,.37,-.04,-.32,.69,-.13,.76,.51,-.36,-.16,.73,.69,-.47,-.28,-.4,.08,.88,.17,.63,-.02,.66,.02,-.11,.15,.21,-.01,-.02,-.1,-.25,.52,.01,.77,-.16,.67,-.08,.21,-.27,.08,-.11,.51,-.1,-.1,-.32,.74,.83,-.21,.04,.78,.67,-.32,0,-.46,.71,.16,-.04,.24,.66,-.03,.64,.63,.69,-.23,.15,-.4,.11,.67,.12,-.14,-.01,-.25,.11,-.03,.29,.39,-.1,-.02,.6,.35,.76,.68,.66,.36,-.07,.26,-.73,0,.42,.15,.81,.13,.29,-.13,-.35,-.14,.1,-.28,-.28,.1,.85,.82,-.02,.86,-.09,-.33,-.66,0,.82,0,-.25,.71,.71,-.31,-.05,.33,.02,.81,-.01,.61,-.41,.8,.61,-.27,.86,.2,-.18,-.33,.58,-.08,-.25,.6,.55,-.02,-.19,.56,.31,-.03,.02,.03,-.04,-.01,-.03,-.1,.01,-.35,.76,.08,.79,.42,.39,.04,-.03,-.02,.82,.71,.85,-.1,0,-.06,.04,.26,.56,.03,.66,-.14,-.1,-.02,.13,-.2,.3,-.23,-.51,.66,-.65,.85,-.24,-.33,.1,.11,-.05,-.06,-.05,.04,.72,-.1,.61,.16,.25,-.46,.48,-.28,-.3,-.17,.4,-.12,.36,-.27,.03,.02,.87,.12,.02,.08,-.13,.55,.74,.43,-.33,-.05,-.13,.71,.38,.49,.64,.18,-.17,.03,.13,.69,.14,-.32,.84,.06,.26,.88,-.82,.34,-.24,.05,.11,.37,.84,.05,.06,-.34,-.27,-.32,-.16,-.22,.87,.73,.62,-.06,-.08,.81,-.27,.22,-.14,.1,-.49,-.04,-.03,.68,0,-.23,-.36,.38,.15,.06,.14,.4,-.02,-.17,.22,-.03,.44,.25,-.03,.06,.01,.08,-.09,-.14,.45,.49,-.1,-.34,-.48,-.23,.5,-.01,.07,-.17,-.49,-.06,.07,.55,-.01,-.22,-.41,-.33,.16,-.55,-.14,-.39,-.31,.04,-.12,.32,.17,-.09,.32,.55,-.06,.44,-.06,.22,.83,.35,-.34,.07,.83,-.26,-.13,-.09,.36,.85,.28,.54,-.06,.14,-.34,-.17,.79,.82,.14,-.18,-.05,.74,.03,-.04,.1,-.07,.18,.04,-.08,.08,-.17,.03,.77,-.1,0,.62,-.14,0,.66,.04,.66,.5,.02,-.17,.09,.03,.14,.71,-.42,.58,.05,-.37,-.04,-.25,0,.39,-.45,-.32,.14,.32,.72,.49,.71,-.1,.01,.06,-.07,-.05,.22,.01,.27,.54,.32,-.09,.44,.41,-.04,-.23,-.58,-.03,.6,-.08,.55,.45,.24,-.09,-.15,.41,-.14,.28,-.29,.38,.17,-.14,-.05,.23,-.43,.64,.18,.05,-.03,.2,.08,-.08,.09,.36,-.02,.08,.71,.01,-.44,.38,.82,.11,-.12,.28,.3,.16,-.04,.2,-.14,.17,.7,-.19,.37,.38,-.12,-.03,.19,.32,.11,.24,.77,-.06,.22,0,-.35,.46,.02,.1,.6,-.1,-.06,.72,.29,.87,.83,-.05,.8,.66,.79,.11,-.29,.01,.43,.2,.43,-.23,.58,.67,.06,-.05,.52,.53,.66,.4,.13,-.05,.63,.34,.15,-.09,.48,.25,.58,.04,.79,.79,.2,.58,.02,.59,-.14,-.1,.41,.6,-.31,.04,.72,.5,.49,-.07,.22,.35,.86,.68,.7,-.15,-.05,0,-.02,-.24,.77,-.06,.08,.55,.08,.26,.29,.08,.74,.85,-.22,-.17,.82,-.1,.16,.86,-.15,-.19,.31,.3,.14,.5,.14,.63,.13,.65,-.3,.34,-.09,-.03,.01,.19,-.03,.17,.82,.16,.35,.25,.25,-.02,-.02,.72,.45,.56,.46,.58,-.31,-.08,-.29,.21,.19,.01,-.18,.51,.54,.55,-.13,.65,-.32,-.09,.31,-.18,.35,-.22,.19,.82,.86,.8,.84,.05,.77,.31,.48,.27,-.47,.35,.23,-.54,.49,-.18,.61,-.12,.84,.52,.08,.75,-.17,-.15,.34,.17,.11,.41,.06,-.35,0,.04,.02,.06,-.01,.77,.89,.53,-.16,.63,.56,.55,.53,.48,.82,.08,-.25,-.25,.47,.05,-.4,-.22,.2,.26,.1,.88,.8,.61,-.32,.6,.41,-.04,.13,.07,.66,.45,.04,-.38,.04,-.03,-.07,-.12,.14,.82,.47,.48,-.31,.19,.18,.74,-.03,-.06,-.19,.02,.78,-.1,.82,.52,.82,.81,.05,.41,.58,.67,0,.23,-.14,.26,-.66,-.08,-.32,-.76,-.04,-.38,-.03,-.11,-.26,.02,.45,.46,-.09,.64,.88,-.44,.78,-.5,-.08,-.47,-.11,.8,.87,.78,.48,.1,.28,.33,.25,.36,.32,.1,.67,.88,.36,.32,.21,.23,-.03,.38,.7,.77,-.13,.04,.02,-.19,.64,.08,.3,-.06,.2,.88,.55,.84,.87,.85,.7,-.05,.52,-.12,-.14,.75,-.1,-.12,-.11,.64,.8,.57,.19,-.07,.56,.17,.81,.22,-.04,.02,-.08,0,-.04,.62,-.36,-.05,-.27,.74,-.15,.5,-.3,-.16,-.06,0,-.21,-.25,.8,-.05,-.13,.23,-.05,.15,.58,-.4,-.42,-.15,.14,.49,-.14,-.16,.52,.33,.36,-.23,.75,-.33,.59,.05,.84,-.09,.17,.09,-.02,.26,.05,.35,.04,-.68,-.31,-.08,.54,.59,.67,.49,-.19,.08,.56,.15,.13,.08,-.17,-.1,.63,.83,0,.43,.72,.22,.13,.09,.76,.74,-.02,-.28,.07,.34,.28,-.01,-.35,.34,.16,-.03,.03,.88,-.3,.03,.56,-.08,-.02,.37,.09,.07,-.08,.67,-.27,.63,-.12,.12,-.28,.06,.63,.28,-.08,.02,-.04,-.13,.87,.81,.81,.07,.86,.88,.79,.49,.73,-.11,.11,.3,.66,-.14,.35,.07,-.14,.11,.77,.6,-.43,.44,-.08,.4,.84,.19,-.07,.13,-.12,-.29,-.18,.1,.1,.54,.83,.31,.86,.25,.12,.14,.35,.27,.02,-.18,.37,.52,.74,-.11,-.11,-.62,.15,.83,.26,.8,.11,.74,.01,-.04,.46,-.58,.66,.76,.83,.24,.55,.27,.7,.54,-.28,.42,.86,.5,.34,.84,.71,.82,.03,.85,.51,.1,.01,.76,.69,.63,.81,.71,-.37,.61,.74,.07,-.59,.75,0,.9,-.53,.01,.59,.29,.76,.69,-.03,-.01,.18,-.25,.78,.04,.63,.37,.57,-.34,-.12,.06,.11,-.1,.08,.16,.08,.2,.79,0,-.06,.35];export{a as rvalData};
