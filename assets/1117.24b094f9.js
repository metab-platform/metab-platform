const a=[.78,.37,0,.61,.13,.28,.15,.37,.61,.69,.26,.12,.75,.01,.04,.4,.48,.41,0,.17,.06,.47,.46,.05,.28,.14,.36,.72,.41,.84,.28,.5,.07,.08,.29,.09,0,.07,.08,.06,.19,.08,.13,.43,.77,.32,.92,.86,.48,.43,.2,.4,.16,.01,.62,.05,.61,.18,.11,.12,.22,.12,.03,.98,.58,.9,.08,.06,0,.94,.23,.29,.61,.78,.06,.04,.08,.6,.04,.83,.16,.3,.47,.18,0,.29,.23,.53,.03,.03,.67,.28,.5,.05,.1,.01,.47,.04,0,.71,.09,.04,.25,.27,.83,.82,.94,.53,.06,.36,.1,.68,.04,.25,.01,.1,.93,.8,.94,.53,.33,.07,.86,.34,.61,.58,.2,.12,.45,.01,.33,.1,.71,.43,0,.51,.9,.59,.76,.16,.11,.06,.78,.17,.09,.91,.05,.16,.15,.29,.09,.86,.83,.9,.29,.45,.97,.24,.26,.04,.3,.34,0,.37,.58,.96,.07,.9,.47,.1,.57,.76,.86,.07,.82,.65,.76,.61,.7,.08,.17,.75,.6,.05,.6,.12,.46,.02,.59,.05,.24,.93,.09,.4,.14,.01,.53,.41,.18,.02,.15,.31,.03,.1,.14,.69,.94,.87,.82,.07,.65,.09,.24,.02,.08,.19,.25,.87,.6,.3,.32,.19,.63,.01,.59,.01,.5,.65,.27,.12,.88,.3,.31,.02,.62,.16,.19,.02,.08,.91,.77,.05,.08,.3,.86,.87,1,.02,.4,.74,.42,.02,.28,.37,.13,.16,.86,.36,.06,.04,.37,.04,.34,.08,.28,.57,.4,.25,.17,.22,.36,.59,.02,.05,.27,.02,.45,.37,.01,.46,.52,.57,.07,.04,.16,.13,.97,.03,.22,.21,.27,.46,.07,.35,.35,.16,.58,.33,.01,.08,.11,.08,.16,.55,.75,.62,.63,.1,.36,.17,.22,0,.01,.08,.33,.11,.74,.11,.04,.01,.19,.01,.23,.1,.15,.35,.07,.47,.92,.33,.43,.55,.68,.61,.61,.11,.66,.15,.93,.88,.65,.34,0,.79,0,.01,.84,.74,.55,.39,.06,.55,.02,.16,.49,.1,.64,.08,.12,.03,.32,.01,.08,.7,.26,.08,.43,.02,.8,0,.88,.51,.95,.91,.4,.06,.22,.17,1,.58,.18,.17,.9,.94,.23,.27,.24,.54,.12,.07,.04,.05,.64,.22,.73,.05,.28,.14,.6,.44,0,.02,.08,.73,.17,.8,.2,.06,.18,.35,.04,.75,.06,.06,0,.47,.2,.54,.49,.72,.3,.02,.48,.62,.53,.01,.03,.73,.53,.04,.11,.46,.5,.05,.66,.03,.8,.06,.04,.07,.41,.43,.28,.8,.58,.61,.04,.2,.55,.5,.39,.37,.09,.22,.44,.65,.89,.02,.88,.22,.04,.11,.52,.65,.23,.72,.36,0,.23,0,.65,.02,0,.01,.61,.09,.01,.64,.01,.41,.11,.03,.13,.71,.32,.39,.84,.22,.5,.03,.74,.17,.39,.17,.06,.06,.12,.16,.04,.09,.75,.48,.21,.65,.18,.49,.32,.03,.1,.55,.17,.72,.19,.15,.45,.51,.56,.67,.81,.48,.76,.05,.13,.27,.33,.33,.19,.11,.2,.15,.58,.15,.36,.72,.97,.31,.84,.39,.15,.09,.64,.16,.01,.73,.72,0,.37,.7,.17,.86,.23,.01,.03,.01,.38,.09,.68,.1,.81,.03,.02,.95,.4,.8,.66,.5,.07,.83,.84,.24,.12,.02,.8,.33,.16,.03,.87,.25,.82,.94,.95,.08,.38,.92,.87,.03,.01,.06,.89,0,.61,.52,.9,.02,.66,.46,.06,.05,.07,.7,.11,.05,.11,.76,.42,.86,.09,.49,.35,.43,.12,0,.25,.91,.11,.95,.06,.57,.24,.05,.05,.52,.88,.67,.13,.62,.18,.56,.22,.64,.04,.44,.38,.8,.65,.73,.08,.37,.66,.26,.01,.12,.36,.96,.14,.29,.1,.2,.74,.89,.4,.28,.23,.02,.05,.6,.11,.96,.91,.91,.07,.49,.03,.99,.01,.44,.29,.17,.35,.14,.41,.71,.77,.65,.17,.07,.18,.1,.18,.01,.04,.08,.1,.04,.94,.05,.67,.19,.11,.51,.92,0,.31,.01,.42,.49,0,.03,.44,.62,.17,.41,.91,.21,.6,.06,.72,.28,.23,.77,.05,.28,.88,.76,0,.33,.76,.11,.98,.35,.33,.17,0,.51,.02,.18,0,.49,.27,.3,.49,.25,.03,.74,.13,.52,.01,.26,.4,.89,.1,.1,.9,.9,.8,.59,.61,.01,.04,.26,.17,.91,0,.94,.03,.64,.57,.09,.03,.77,.44,.8,.13,.55,.29,.01,.1,.01,.83,.46,.15,.51,.02,.19,.65,.07,.6,.49,.15,.62,.01,.01,.95,.15,.04,.3,.91,.7,.68,.59,.09,.01,.38,.11,.06,.49,.01,.33,.44,.88,.27,.77,.71,.03,.01,.89,.83,.67,.94,.44,.89,.22,.09,.45,.91,.51,.32,.8,.58,.11,.32,.37,.64,.15,.34,.01,.62,.72,.21,.37,.94,.02,.5,0,.19,.04,.02,.65,.17,.79,.18,.06,.33,.12,.2,.02,.7,1,.44,.1,.83,.7,.78,.34,.33,.99,.85,.06,.75,.6,.49,.02,.9,.41,.04,.04,.11,.09,.03,.24,.06,.01,.61,.58,.33,.47,.52,.25,.88,.23,.54,.01,.86,.02,.08,.77,.64,.58,.08,.39,.05,.02,.25,.27,.09,.61,.17,.61,.46,.16,.15,.1,.78,.02,.25,.35,.8,.3,.21,.33,.14,.99,.22,.2,.13,.67,.46,.07,.23,.12,.28,.06,.07,.1,.04,.13,.8,.01,.38,.2,.92,.03,.83,.17,.98,.39,.76,.35,.17,.1,.04,.65,.02,.08,.38,.39,.5,.02,.42,.54,.06,.38,.06,.92,.33,.18,.08,.03,.23,.33,.07,.08,.61,.51,.16,.7,.13,.98,.1,.81,.73,.25,.04,.11,.44,.1,.6,.16,.97,.03,.03,.29,.2,.75,.94,.09,.04,.1,.07,.66,.35,.72,.46,.97,.67,.77,.02,.96,.02,.76,0,.02,.32,.4,.15,.64,.1,.88,.04,.54,0,.56,.17,.94,.74,.01,.31,.01,.07,.57,.46,.05,.38,.13,.04,.02,.01,.63,.02,.49,.41,.33,.99,.08,.48,.98,.06,.43,.11,0,.82,.03,.41,.01,.29,.51,.55,.43,.36,.34,.86,.01,.06,.74,.33,.11,.49,.39,.38,.06,.93,.2,.37,.2,.99,.78,.88,.11,.11,.29,.51,.41,.22,.02,.75,.43,0,.09,.08,.03,.04,.4,.45,.28,.31,.26,.85,.12,.42,.39,.6,.11,.02,.29,.01,.12,.54,.1,.03,.07,.19,.24,.37,.46,.02,.31,.05,.58,.08,.3,.08,.7,.94,.47,.85,.3,0,.2,.54,.07,.36,.03,.47,0,.92,.12,.86,.14,.62,.78,.15,.09,.02,.71,.94,.2,.06,.36,.22,.14,.04,.39,.22,.79,.15,.1,.06,.39,.1,.55,0,.25,.31,.12,.38,.71,.06,.7,.84,.34,.54,.08,.47,.47,.24,.03,.07,.04,.07,.22,.55,.09,.01,.41,.79,.05,.01,.16,.41,.82,.13,.79,.06,.44,.66,.05,.02,.01,.6,.01,.77,.73,.08,.99,.03,.23,.02,.02,.06,.35,.99,.5,.29,0,.08,.11,.98,.03,.31,.57,.01,.13,.55,.33,.22,.24,.83,.25,.47,.77,.16,.39,.23,.1,.16,.84,0,.9,.91,.76,.85,.04,.01,.97,.06,.03,.97,.05,.91,.14,.03,.15,.02,.27,.08,.02,.04,.54,.22,.04,.07,.58,.95,.79,.93,.65,.23,.11,.16,.08,.54,.05,.42,.31,.81,.63,.38,.85,.86,.19,.01,.47,.12,.54,.16,.57,.05,.8,.33,.03,.61,.31,.16,.13,.46,.82,.08,.05,.04,.04,.21,.19,.06,.3,.09,.63,.62,.04,.36,.21,.05,.92,.76,.33,.77,.04,.48,.08,.02,.24,.81,.07,0,.37,.01,.55,.85,.28,.28,.09,.8,.27,.25,.09,.92,.03,.01,.06,.04,.8,.62,.04,.03,.53,.63,.62,.16,.84,.59,.03,.51,.1,.13,.14,.48,.13,.16,.3,.03,.01,.24,.98,.1,.86,.06,.8,.94,.7,.5,.57,.07,.1,.11,.37,.31,.59,.1,.67,.36,.94,.25,.77,.43,.09,.23,.56,.43,.24,.04,.13,.74,.31,.43,.85,.75,.12,.98,.8,.5,.17,.68,.23,.69,.68,.01,.18,.17,.52,.06,.59,.91,.42,.16,0,.88,.05,.78,.8,.19,0,.03,.03,.8,.01,0,.01,.64,.74,.8,.87,.2,.56,.18,.31,.86,.44,.01,.86,.27,.16,.2,.63,.06,.67,.19,.15,0,.22,.97,.19,.8,0,.19,.16,.06,.36,.38,.06,.99,.08,.5,.36,.41,.47,.03,.06,.13,.43,.26,.67,.64,.49,.25,.44,.97,.12,.46,.15,.53,.76,.76,.38,.08,.87,.11,.49,.29,.21,.41,.88,.13,.09,.16,.65,.13,.97,.23,.84,.86,.58,.08,.13,.91,.61,.34,.79,.4,.09,.8,.1,.34,.33,.19,.96,.03,.32,.01,.45,.02,.65,.11,.59,.81,.52,.41,.08,.19,.64,.41,.08,.26,.8,.21,.29,.97,.94,.12,.22,.95,.92,.21,.07,.83,.81,.11,.56,.92,.08,.25,.03,.03,.52,.01,.11,.05,.63,.02,.84,.95,.07,.27,.7,.13,.02,.14,.66,.22,.02,.08,.59,.57,.61,.02,.79,.61,.57,.64,.77,.07,.01,.03,.05,.88,.43,.18,.01,.39,.32,.55,.03,.53,.96,.04,.26,.07,.75,.68,.55,.01,.17,.05,.66,.96,.88,.8,.56,.05,.88,.27,.11,.94,.08,.66,.86,0,0,.64,.25,0,.83,.82,.11,.41,.91,.23,.06,.71,.09,.65,.06,.04,.02,.34,.77,.86,.43,.74,.45,.94,.78,0,.52,.86,0,.42,.86,.87,.03,.3,.11,.16,.15,.23,.94,.16,.53,.53,.26,.75,.26,.09,.32,.71,.01,.15,.16,.82,.85,.17,.32,.31,.03,.02,.03,.21,.11,.06,.57,.21,.52,.45,.35,.19,.23,.24,.13,.12,.09,.01,.05,.2,.05,.79,.94,.08,.23,.97,.61,.8,.69,.68,.82,.13,.75,.08,.25,0,.07,.2,.52,.05,.05,.17,.3,.04,.51,.3,.33,.18,.35,.43,.71,.62,.5,.91,.01,.01,.31,.06,.02,.46,.68,.76,.73,.23,.01,.5,.94,.48,.86,.9,.32,.69,.01,.15,.12,.34,.87,.31,.05,.26,.09,.3,.83,.01,.71,.15,.61,.28,.07,.19,.06,.08,.02,.81,.45,.67,.3,.02,.24,.42,.42,1,.89,.88,.88,.72,.95,.48,.1,.45,.09,.02,.03,.08,.28,.81,.12,.6,.06,.03,.07,.21,.35,.87,.01,.88,.48,.3,.89,.04,.02,.69,.27,.78,.65,.33,.02,.16,.02,.36,.61,.59,.11,.07,.24,.89,.04,.56,0,.12,.02,.03,.01,.06,.6,.56,.14,.39,.02,.39,.7,.61,.03,0,.21,.81,.29,.27,.36,.07,.17,.34,.92,.23,.05,.35,.02,.04,.71,.39,.06,.14,.34,.71,.35,.95,.39,.17,.3,.03,.75,.37,.26,.64,.35,.12,.46,.01,.42,.03,.16,.14,.4,.46,.34,.47,.39,.02,.53,.23,.45,.01,.31,.42,.74,.54,.74,.76,.19,.15,.11,.01,0,.09,.05,.16,.36,.76,.66,.55,.84,.5,.09,.46,.44,.16,.06,.65,.58,.13,.22,.91,.04,.04,.02,.71,.54,.84,.09,.33,.62,.93,.4,.94,.53,.94,.04,.11,.86,.18,.63,.43,.39,.85,.01,.17,.02,.21,.03,.42,.05,0,0,0,.28,.85,.88,.8,.94,0,.03,.02,.74,0,.01,.08,.05,.06,.01,.54,.92,.08,.08,.2,.21,.15,.06,.01,.3,.22,.35,.73,.6,.02,.32,.83,.45,.26,.15,.41,.48,.48,.1,.02,.15,0,.64,.07,.58,.21,.21,.44,.93,.12,.17,.04,.66,.99,.43,.27,.03,.01,.03,.69,.06,.57,.49,.17,.81,.11,.07,.03,.33,.09,.16,.13,.99,.54,.67,.03,.17,.13,.02,.07,0,.73,.01,.04,.86,.52,.04,.11,.14,.05,.15,.22,.36,0,.61,.07,.04,.23,.01,.29,.18,.15,.75,.09,.04,.84,0,.67,.59,.06,.85,.17,.05,.39,.19,.77,.03,.37,.54,.19,.81,.92,.44,.11,.31,.53,.31];export{a as pvalData};
