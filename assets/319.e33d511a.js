const a=[0,0,0,.54,0,.4,.03,.01,.39,0,.01,.32,.66,0,0,.75,.01,.47,.04,.14,.68,.02,.17,.01,.02,0,.3,.08,.08,.27,.01,.03,0,.04,.71,.35,0,0,.02,0,.39,0,0,.27,.27,.17,.49,0,0,.04,.24,.71,0,0,0,.01,.43,.31,.02,0,0,0,0,.26,.08,.22,0,0,.09,.77,.6,0,.06,.3,0,.15,.02,0,0,.18,0,0,.25,0,.45,.01,0,.81,0,0,.02,.55,.97,0,.49,.05,0,.34,.02,0,.45,0,0,.05,0,.96,.23,.25,0,0,.7,.04,.92,0,.12,0,.05,0,0,.06,.33,.2,0,.01,.73,0,0,0,.3,0,.03,0,.16,.04,0,0,.89,.25,.17,.88,0,.24,0,0,.81,.59,.89,.06,0,.08,0,.38,.94,.67,.01,.37,.02,.66,.23,0,.69,0,.87,.27,.86,.02,0,.03,.49,0,.82,.04,.21,0,0,.02,.63,.31,.1,0,.44,.92,.29,0,0,.37,.11,.03,.08,.11,.37,.9,.47,0,0,0,0,0,1,.01,.07,.01,0,.48,0,0,.77,.03,.04,.43,.02,0,.88,0,.32,.13,.5,.1,.04,0,0,0,0,0,.01,0,.2,.07,0,.11,.91,.22,.05,0,.02,.64,0,.61,.67,.7,.09,0,0,.01,.3,0,.03,.52,.15,.86,.44,0,0,.15,0,.18,.09,.03,.11,0,.29,.52,0,0,.05,0,.1,0,.84,0,.74,0,0,0,0,.83,.86,.07,0,0,.24,0,0,0,.36,0,.23,0,0,.04,.02,.07,0,.01,.51,0,.68,.08,.51,0,.49,0,.14,.55,.03,.47,.09,0,.97,.28,0,.27,.14,.91,.04,0,0,.13,0,0,0,.67,0,0,.61,.53,0,.07,.68,.38,0,0,.74,.58,.05,.82,.14,.02,0,.02,0,0,.27,.11,0,0,.1,.2,0,.23,0,.01,.59,.55,0,0,.01,.51,0,0,.37,.18,.85,.06,.52,0,.55,0,0,.7,.82,.18,.73,.05,0,.25,.67,0,.86,.07,.8,.53,.87,.12,.74,.04,.88,.65,0,0,0,.49,.09,.81,.72,0,0,.28,.2,.45,.62,.11,0,.19,.18,.52,0,0,0,0,0,0,0,0,.32,.78,0,0,.2,0,.44,0,.02,.57,.86,0,0,.32,.4,0,0,.02,.16,.23,.11,0,.05,0,0,0,0,0,0,.07,0,0,0,0,.02,0,.18,0,0,.11,.08,.19,0,0,.41,.01,0,0,0,.04,.4,.89,0,.33,0,0,.73,0,0,.39,.3,0,0,.69,0,0,0,0,0,.75,0,.12,0,0,.06,0,.26,.35,0,.16,0,0,.07,.12,0,0,.78,.66,0,0,0,.02,.64,0,0,0,0,.04,0,.2,0,0,.02,.49,.11,0,.94,0,.73,.4,.01,.9,.15,0,.18,0,.67,.11,.29,.1,.78,.18,.03,.04,0,.15,.08,.03,.24,.75,.01,.03,.54,.83,0,.4,.17,0,0,0,0,.43,0,0,.01,.13,0,.07,.15,0,.28,.34,.92,.54,.02,.59,0,0,.14,0,0,0,.06,0,.03,.44,.01,.08,0,.48,0,0,0,0,0,0,.2,.28,.28,0,0,0,0,0,.02,.5,0,0,0,.09,0,.23,.84,0,.08,.42,.71,0,.45,.77,.37,.87,0,0,.79,.94,.83,.03,.03,.62,.33,.67,.86,.6,0,0,.79,0,.01,.05,0,0,0,.13,.02,.03,.54,0,0,.09,0,0,0,0,.73,0,.48,0,.37,0,0,.26,0,.41,.01,.09,0,0,0,.05,.16,.49,.61,.23,.01,0,.08,.68,.49,.19,0,.07,0,0,0,.5,.31,0,0,0,.24,.12,0,0,0,0,.77,0,.12,.06,.31,0,0,.46,0,0,0,.05,.05,0,.68,.76,.22,0,.96,.33,0,0,.01,.6,.61,.31,0,.46,.1,.04,.08,0,0,.62,0,0,.02,0,.04,0,0,.03,0,.11,.04,.9,0,.12,.04,.58,.09,0,0,.38,.43,0,.53,0,.34,0,.43,.01,.65,.75,0,.05,.03,.02,0,.34,0,.03,0,0,.02,0,0,.17,.02,.46,.02,.6,0,.53,.17,0,.01,0,0,.01,0,.22,.47,0,0,0,.02,.04,.83,.11,0,.06,0,0,0,.1,0,0,0,0,0,.01,0,0,0,.03,.4,0,.04,.64,.9,.09,0,0,0,.01,0,0,.91,0,.5,.22,0,0,.75,0,.1,.02,.08,.74,.08,0,.86,.46,.67,.23,.22,.38,.02,0,0,0,.09,0,.07,0,.77,.01,.02,.84,.01,.05,.07,.47,.88,.52,.06,.17,.91,.01,0,0,.01,.01,.01,.52,.01,.86,0,0,0,.99,.47,.18,.17,.05,.26,.44,.07,.41,.34,0,.47,0,0,.75,.43,.76,0,0,0,0,0,0,0,.72,0,.17,0,0,.09,.12,.97,.34,1,0,.59,.6,.91,.89,.71,.32,.02,.19,0,.65,.85,.2,0,.66,.08,.31,0,0,0,0,.32,0,0,.04,.84,0,0,0,0,0,.03,.25,0,0,.97,.57,.51,0,0,.09,0,0,.46,.85,0,.67,.02,.03,.45,.6,0,.81,0,.76,0,.18,0,.54,0,.88,.65,.46,0,.07,.4,0,0,0,0,.44,.5,.05,.4,0,0,.02,0,.06,.39,0,0,.69,.61,0,.01,0,.49,.01,.7,.76,.97,.9,.89,.03,.47,.32,.1,.7,.89,.25,.39,.06,.27,.82,.02,0,.5,.11,.13,.38,.13,0,0,.56,0,.25,0,0,.1,.9,0,.64,.21,.52,.23,.54,.02,.4,.74,0,0,.01,.04,.23,.02,0,.02,.1,.52,.29,.58,.04,.41,0,.09,0,0,.19,.97,.13,.06,.3,.68,0,.05,.47,.71,.02,0,.41,.07,.18,0,.59,.17,.25,.01,0,.1,.04,0,.02,0,0,.65,0,.22,.3,.02,.2,.46,0,.02,.01,.92,0,0,.01,0,0,0,.1,0,0,0,0,.01,.9,0,.52,0,.56,0,.29,.16,.01,0,.88,0,.04,.04,.01,.57,0,.02,0,.16,.02,0,.37,.36,0,.16,.65,.02,0,0,.01,.84,0,0,.11,.72,0,0,.46,.82,.15,0,.98,0,0,0,0,.26,0,.03,0,.86,.54,.99,.09,.08,.9,.09,0,.14,.32,0,.19,0,0,0,.01,.11,.06,0,.41,0,.16,0,.95,.05,.36,.01,.06,.75,.98,0,.41,0,0,.16,0,.72,0,0,.27,0,.54,.11,0,0,0,.01,0,.4,0,.3,0,0,0,0,.2,0,.18,.32,.01,0,.71,0,0,0,.97,.11,0,.01,.95,.57,.02,.84,.01,.31,.19,.22,.4,0,.59,0,0,0,.61,.86,.8,0,0,0,.13,.86,.76,.88,.07,0,.66,0,.47,.18,.05,.68,.02,0,0,0,0,0,0,.03,0,.88,0,.17,.04,.18,.93,0,.65,0,.41,0,0,0,.02,0,.38,0,.2,0,.86,.2,.73,0,.61,.75,.95,.09,0,0,0,.31,.95,.03,0,.01,0,0,.02,.05,.99,.94,0,.02,.11,0,.62,0,0,0,0,.01,.1,0,.01,0,.3,.17,.01,0,0,.75,.15,0,0,0,0,.51,0,.28,.72,.36,.15,0,.49,.41,0,.73,.02,0,.71,0,.96,.37,0,.45,.02,0,.11,0,0,.79,.13,.9,.09,.54,.92,0,0,.42,.01,0,.15,0,.21,.73,.93,0,.57,.28,0,.15,.06,0,0,.04,0,.05,0,.02,.72,.67,0,.03,.09,0,0,.3,0,.81,0,0,.3,0,.73,0,0,.73,.24,.01,0,0,0,.19,.05,0,.07,0,0,.14,.37,.86,0,.42,.25,.03,.73,.35,.85,.01,.52,.01,.82,0,.1,.32,0,.2,.67,0,.01,0,0,.54,.13,.03,.53,0,0,0,0,.65,.07,.96,.04,.85,0,0,0,.05,.08,0,0,0,.98,.4,.9,.71,.29,.11,.23,0,0,.04,.03,0,0,.18,.01,0,.2,0,.29,0,0,0,.43,.92,0,.52,.01,.26,0,0,.67,.41,0,0,0,0,.12,.45,.01,.61,.44,.16,0,.36,.99,0,.14,0,0,0,.18,.27,.17,0,.11,.01,0,.15,.62,0,.09,0,.04,.12,.01,.07,0,.55,.44,0,.31,.23,.03,.06,0,.09,.78,0,.42,.04,0,0,0,0,.19,0,0,0,.34,.28,.17,0,0,0,0,0,0,.37,.03,0,0,0,.01,.14,.84,0,.02,.01,.54,0,0,0,.97,0,0,.37,0,.66,0,.17,.03,0,0,0,.26,0,0,0,.27,0,.01,0,0,0,0,0,.18,.43,.01,0,.14,.08,0,0,.15,0,.1,0,0,.33,0,0,.87,.04,0,.34,.03,.03,0,.01,0,0,0,.4,0,.07,0,.18,.02,.86,.26,.54,.95,0,.55,0,.01,0,.44,.07,0,0,0,0,0,.14,.35,.02,0,0,.82,0,0,0,0,.85,0,.12,.31,0,.9,0,.86,.01,0,0,0,0,.37,0,0,0,.01,0,0,.4,0,0,.38,0,.51,0,0,.53,0,.05,.54,.59,0,.22,.03,.15,0,.92,.01,.43,.73,.73,0,0,0,.79,0,0,0,0,0,0,.6,.06,.01,0,.42,0,.13,0,0,.03,0,0,0,0,0,0,.02,.4,.78,0,0,.32,0,.36,.4,.23,.85,.14,0,0,0,0,.09,.01,0,.8,.7,.03,.58,0,.49,0,0,0,0,.09,0,0,0,.45,.06,.5,.78,0,.21,.01,0,.85,.01,.74,.42,.05,.82,0,0,.52,0,0,0,0,0,.18,0,.37,0,0,0,0,.61,0,.01,0,0,.03,.23,0,0,0,0,0,.03,.64,0,0,0,.37,.03,.75,.84,0,.82,0,.37,.01,0,0,0,0,0,0,.62,0,.82,.06,0,.2,.03,.7,0,0,0,.02,.07,0,0,0,.01,.9,.87,.33,.79,.9,0,0,.76,.31,0,.27,.02,0,.66,.06,.91,.08,0,0,.76,.32,0,.04,.13,0,0,0,.08,.35,0,.24,.76,0,0,0,.5,0,0,0,.79,0,.65,0,.01,.65,.02,.53,.01,.46,0,0,.18,0,0,0,0,.05,.48,0,0,0,.24,.38,.08,0,0,.7,0,0,.02,0,.02,0,0,.04,.01,.1,0,0,.72,0,0,.27,.05,.78,0,.07,.53,0,.22,.9,0,.23,.94,.25,0,.02,0,.27,.84,.06,.09,0,.03,.69,.29,.02,.74,0,0,0,.08,0,0,0,0,0,.79,.03,0,0,.58,.68,.45,.12,.02,0,0,0,0,.59,0,0,.33,.59,.09,.51,0,.02,.79,.9,0,0,0,0,0,.61,.01,0,.23,.06,0,0,0,0,.73,.09,0,0,0,.19,0,0,0,.13,.82,0,0,0,0,0,.12,0,0,0,0,.04,.15,0,0,0,0,0,0,.05,0,0,0,.39,0,0,0,0,0,0,0,0,.76,0,0,.74,0,0,.54,0,0,0,0,.46,.79,.47,.11,0,.36,0,0,0,0,.02,.38,.69,.03,.47,.17,.92,.63,0,.91,.22,0];export{a as pvalData};
