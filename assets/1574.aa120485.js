const a=[0,0,0,.58,0,.17,.01,.09,0,.12,0,.7,.89,0,0,.76,.12,.35,.12,.62,.55,0,.12,.01,0,0,0,.6,0,0,0,0,0,.69,.72,.08,0,0,0,0,.91,0,0,.73,.21,.01,.89,.15,.95,0,.01,.78,.08,0,0,0,0,.13,0,0,0,0,0,.7,0,0,0,0,.6,.58,.5,0,0,.02,0,.37,.08,0,0,.16,0,0,.46,0,.09,.02,0,.21,0,0,.03,.21,0,0,.66,.09,0,.01,.97,0,.18,0,0,.07,0,.28,.71,.59,0,0,.35,0,.5,0,.6,0,.71,0,.03,0,.61,.18,.09,.43,.22,0,0,.51,0,0,.14,.01,.35,.05,.15,.36,.05,0,0,.42,0,.74,0,0,.98,.57,.81,.16,0,.08,0,.54,.67,1,.09,.07,.17,.28,0,0,.46,0,.99,0,0,0,0,0,.13,0,.99,.01,.24,.29,0,.09,.82,.09,0,0,.48,.45,.84,0,0,.42,.72,.8,.09,.01,.14,.02,.24,0,0,0,0,.02,.8,.01,.03,0,0,.86,0,0,.47,0,0,.97,.35,0,.06,0,.18,0,.9,.02,.02,.05,0,0,0,0,0,0,.11,0,0,.01,.37,.38,0,0,.16,.62,0,.81,.73,.63,0,0,.3,.46,0,.44,.49,.06,.08,.24,.32,.39,0,.01,0,.97,.19,0,.67,0,.24,.12,0,0,.19,0,.07,0,.3,0,.32,0,0,0,0,.32,.48,0,0,.96,0,.01,0,0,0,0,.21,0,.03,.41,.75,0,0,.7,.01,0,.15,0,.71,0,.99,0,0,.19,.63,0,.15,0,.01,.33,0,.24,.55,.99,0,0,.02,.05,0,.03,0,.57,0,0,.2,0,0,.84,.29,0,0,0,0,.25,0,.79,.01,0,.25,.03,0,0,.28,.74,0,0,.95,0,0,0,0,.29,.12,0,0,0,0,.57,0,0,0,.32,0,.62,.44,0,.03,0,0,.46,.12,.01,0,.33,.01,0,.01,0,.63,0,.62,.38,.55,.39,.9,0,.02,.78,0,0,0,.81,.72,.8,.58,0,0,.11,.93,.18,.13,0,0,0,.01,.98,0,0,0,0,0,0,.19,0,.09,.65,0,0,0,.01,.55,0,.2,.69,0,0,0,.74,0,.04,.45,.47,0,.46,.05,0,.02,0,0,0,0,0,0,.65,.12,0,0,0,.26,0,0,0,0,.01,.53,.34,.15,0,.03,0,0,0,0,0,.72,.02,.01,.19,0,0,.44,0,0,.74,0,0,0,.38,0,.01,0,0,0,0,.23,0,0,.07,0,0,.72,.68,.79,.06,0,0,.16,.19,0,.63,0,.54,0,0,0,.24,.18,0,0,0,0,.03,0,.03,.16,.26,.59,.01,0,0,.23,0,.34,.63,0,.76,.06,.05,.54,0,0,.19,.29,.68,.99,.37,0,0,.8,.35,.98,.01,.83,.83,.04,.41,.12,.85,0,.02,.02,0,0,0,0,.48,0,.83,0,.74,0,.13,0,.21,.44,.38,.45,.76,.16,.26,0,0,.1,.05,0,0,.25,0,0,.01,.02,.24,0,0,0,0,0,0,.07,0,.31,.9,.89,0,.15,0,0,0,0,.29,0,0,0,.02,0,0,.03,.11,.89,.07,.44,0,.23,.02,.91,.95,0,.47,.28,.8,.48,.95,0,.23,0,.01,.04,.02,0,.36,.65,0,0,0,0,0,0,.49,.53,.01,.23,0,0,.86,.02,0,.71,0,.06,0,.25,0,.01,0,0,.46,0,.26,.47,.5,0,0,0,.03,.06,.61,.3,0,0,0,0,.84,.29,0,0,.25,0,0,0,.31,.98,.58,0,0,.07,.01,0,0,0,.93,.14,.21,.27,.6,.8,.92,.2,.08,0,0,0,.01,0,0,.79,.51,.04,0,.32,.01,0,.98,.11,.25,.55,.08,.01,.18,.03,.17,.03,0,0,.73,0,0,0,0,.01,0,0,0,0,.66,0,.06,0,.31,.57,.81,0,0,0,.53,.62,0,0,0,.08,0,.05,.36,.05,0,0,.14,.31,.03,0,.22,.17,0,0,0,0,0,0,.79,.37,.06,.5,0,0,.81,0,0,0,.3,0,0,0,.84,.33,0,0,0,0,.01,.08,.01,0,.02,0,0,0,0,0,0,.03,0,.12,.01,0,0,0,0,0,0,.01,.87,.37,.09,0,.02,0,.08,0,.21,.35,0,.78,0,.26,0,.53,0,.09,.01,.29,.07,.17,0,.09,.24,.93,.39,.11,.01,.14,.01,0,0,.47,.21,0,0,.31,.02,0,.25,.95,.01,0,.32,.71,0,.03,.06,0,.76,0,0,.41,0,.47,.26,0,.31,0,.86,.3,.4,.84,0,.19,.04,0,.04,.14,.46,.01,0,.06,0,0,.62,0,0,0,.81,0,0,0,0,0,.78,0,.18,0,0,0,.17,.21,.62,.54,0,.15,.01,.93,.09,.46,.58,.05,.11,0,0,.88,.33,.67,.41,.22,.43,.01,0,0,0,.88,0,0,.02,.02,0,0,0,0,0,0,.88,0,0,.29,.01,.03,0,.02,.64,.25,0,.72,.76,.33,.75,0,.35,.02,.08,0,.2,0,.12,0,.36,.76,.98,0,.26,.96,.25,0,.18,.26,.54,0,0,0,.18,.02,0,0,0,0,.35,0,.01,.12,.18,.07,.75,.71,0,0,.78,0,.78,.2,0,.82,.38,.39,.37,.52,.36,.57,.55,.19,.76,.06,.15,.21,.49,.7,0,0,.49,.1,.02,0,.01,.78,.27,0,.98,0,0,.78,0,0,.86,.58,.41,.27,.29,.04,0,.37,0,0,.4,0,.48,.55,0,.1,.89,.42,0,.43,0,.03,0,.24,0,0,.23,0,.02,.01,.12,.18,0,.17,.35,.85,0,.04,0,0,0,0,.76,0,0,0,0,.43,0,0,.26,0,0,.88,.1,.84,.73,0,.63,.2,.14,.01,0,.15,.16,0,.06,0,0,.23,0,0,0,.77,.02,.23,0,0,0,0,.19,0,.38,.57,0,0,.77,.18,.39,.43,0,0,0,0,0,.01,.77,.01,.76,.5,0,.08,.41,.4,0,0,.04,.57,0,0,.15,.45,.97,0,.55,.73,0,0,.93,0,.11,0,.07,.99,.36,0,0,.49,0,.88,.02,.47,.69,0,0,.7,0,0,0,0,0,0,0,.3,.87,0,0,0,.27,0,.3,0,.9,.41,.24,.62,.69,0,.97,0,0,.25,0,.02,.31,0,.06,0,.24,.04,0,0,0,.02,0,.26,0,0,0,.95,0,0,.09,0,.9,.01,.22,0,0,.72,0,0,.46,.65,0,0,1,.89,.02,.64,.02,0,.16,0,.11,0,.07,0,0,0,.5,.3,.84,0,0,0,.57,.82,.08,.21,0,0,.65,0,.25,.51,.13,.47,.21,0,0,.66,0,0,0,.27,.74,.48,0,0,0,0,.51,0,.69,0,.16,0,.43,0,0,.76,.32,0,.41,0,0,0,.51,0,.96,.6,.59,.27,0,0,0,.43,0,.29,0,0,0,0,0,.46,.06,.16,0,0,.17,0,.17,0,0,0,0,.09,.7,.01,0,0,.71,0,.03,.11,0,.05,.08,0,0,0,.01,.63,0,.16,0,.11,.25,.74,.34,.65,0,0,.08,.33,0,.01,.39,.46,0,.36,.17,0,0,0,0,.02,0,.01,0,.58,.01,0,0,.91,.84,.02,.1,0,0,.59,.01,0,.08,0,0,0,.25,.13,.06,.01,.01,.39,.32,.7,.78,.23,.09,.06,.89,0,0,.1,0,0,0,0,.23,.32,.19,0,0,.05,.34,.12,0,0,0,0,0,0,.75,0,0,.03,0,.5,0,.47,.05,.03,.82,0,.43,.54,.01,.1,.31,0,.3,.24,0,.1,.07,0,0,0,0,.38,.02,0,.25,0,0,.46,0,.71,.33,.31,.2,.39,0,0,.15,.47,0,0,0,0,.06,.8,.86,.32,.03,.01,.03,0,0,.01,.77,.11,0,0,.04,0,.09,0,0,0,0,0,.67,0,0,.94,0,.42,0,0,.83,.98,0,.68,0,0,.05,.89,0,.7,.96,.06,0,.66,.41,0,0,0,0,0,0,.2,0,0,0,.41,0,.89,.46,0,.08,0,0,.06,0,0,.01,.34,0,0,.72,.02,0,.18,0,0,0,0,.11,.01,0,0,0,0,0,0,0,0,0,.51,.03,0,.37,0,0,0,0,.87,.01,0,.02,0,0,.43,.12,0,0,0,.03,0,.01,0,.44,0,0,0,0,.72,0,.03,0,0,0,.15,.84,0,0,0,0,0,.02,0,0,0,.96,.04,0,.01,.02,0,.02,.13,0,.48,0,0,0,0,0,.05,.18,0,0,0,0,.69,.49,0,0,0,0,0,0,.65,0,.03,0,.9,.04,.66,.31,.36,0,0,.02,0,.77,0,.68,.16,0,0,0,0,0,.04,.16,.56,0,0,.25,.05,0,0,0,.09,0,.09,.21,0,.05,0,.19,.86,0,0,0,0,.85,0,0,0,0,0,0,.01,.05,0,.45,0,.94,0,0,.81,0,.15,.07,0,.02,.08,0,0,.28,.6,.04,0,.3,.84,0,0,0,.62,0,0,0,0,0,0,.68,.44,.03,0,.85,0,.13,.06,.03,.05,0,0,.01,.28,0,0,.02,0,.71,0,0,0,.01,.13,.7,.24,.02,0,0,0,0,.56,0,0,0,.98,.01,.02,.6,0,.02,0,0,0,0,.94,0,0,0,0,.05,.48,0,0,.08,.04,0,.3,.03,.92,.78,.02,.73,0,0,.86,0,0,.18,0,.46,0,0,.89,0,0,0,0,.62,0,0,0,0,0,.03,0,0,0,0,0,0,.66,0,0,0,.05,.02,.39,.02,0,.01,0,.58,0,0,0,0,0,0,0,.94,0,.89,.06,0,.01,.06,.04,0,0,0,0,0,0,0,0,.79,.67,.18,.84,.92,.85,0,.06,.13,.94,0,.5,0,.32,.58,.09,.55,.12,.19,0,.88,.01,0,0,0,0,.2,.01,0,.69,0,.56,.36,0,0,0,.92,0,.22,0,.92,0,.02,0,0,.86,0,0,.52,.33,0,.07,.23,0,0,0,0,.04,.73,0,0,0,.32,.3,.94,0,0,.74,0,0,0,0,.01,0,0,.01,.31,0,0,0,.14,.01,0,.01,.19,.32,0,.14,.89,0,0,.67,0,.18,.83,.08,0,0,0,.03,.87,.19,.75,0,0,.38,.95,.01,.75,0,0,0,.08,0,0,0,0,0,.28,.38,0,0,.01,.36,.65,.48,.7,0,0,.44,0,.95,0,0,.35,0,.87,.03,0,.11,.83,.84,0,0,0,0,0,.94,0,.09,.23,.29,.61,.94,0,0,0,0,0,0,0,0,0,0,0,0,.25,0,0,0,0,0,.45,0,.36,0,0,.01,0,0,0,0,0,0,0,.08,0,.15,0,.17,0,0,0,0,0,.88,0,0,0,0,0,.76,0,.01,.94,0,0,0,0,.06,.9,.68,.85,0,.01,0,0,0,.28,0,.83,.2,.16,.87,0,.14,.03,0,.47,.17,0];export{a as pvalData};
