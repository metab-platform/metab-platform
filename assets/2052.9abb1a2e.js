const a=[.01,.81,.44,.36,.73,0,.9,.56,.69,.84,.72,.03,.11,.21,.51,.44,.37,.74,.12,.73,.2,.46,.17,.83,.37,.47,.87,.22,.42,.89,.6,.32,.36,.15,.06,.04,.39,.83,.51,.9,.61,.56,.06,.01,.33,.53,.64,.04,.88,.68,.51,.06,.56,.54,.28,.69,.57,.08,.96,.43,.15,.49,.37,.87,.36,.56,.32,.99,.2,.66,.67,.7,.36,.19,.73,.02,.08,.1,.53,.58,.99,.44,.53,.56,.57,.7,.61,.94,.45,.62,.83,.87,.24,.63,.04,.49,.39,.3,.27,.1,.37,.32,.32,.45,.59,1,.38,.15,.31,.51,.33,.61,.77,.6,.06,.45,.98,.89,.32,.46,.6,.86,.38,.01,.92,.08,.59,.1,.51,.63,.51,.81,.7,.65,.08,.12,.59,.03,.94,.07,.48,.1,.65,.53,.02,.19,.18,.31,.33,.95,.24,.85,.5,.61,.58,.55,.15,0,.88,.53,.74,.26,.75,.83,.27,.21,.8,.87,0,.54,.01,.74,.77,.16,.74,.9,.16,.68,.71,.55,.87,.21,.09,.79,.93,.52,.23,.46,.47,.48,.19,.35,.3,.11,.36,.23,.29,.02,.43,.68,.43,.45,.44,.72,.44,.16,.36,.5,.31,.48,.88,.83,.04,.76,.05,.22,.76,.99,.72,.4,.45,.95,.28,.58,.83,.65,.67,.73,.06,.35,.28,.93,.5,.66,.18,.01,.87,.49,.7,.09,.83,.89,.77,.82,.43,.58,.77,.96,.22,.68,.1,1,.33,.37,.37,.33,.52,.26,.95,.54,.71,.57,.14,.45,.29,.74,1,.29,.01,.2,.07,.61,.37,.5,.79,.31,.76,.2,.38,.95,.85,.07,.84,.04,.86,.82,.11,.45,.09,.32,.92,.97,.62,.82,.02,.06,.23,.5,.43,.66,.2,.51,.2,.33,.18,.36,.38,.51,.41,.31,.87,.32,.31,.02,.1,.68,.59,.63,.38,.46,.59,.6,.95,.64,.6,.53,.32,.43,.04,.66,.6,.86,.62,.01,.96,.35,.92,.32,.46,.21,.56,.13,.26,.84,.71,.33,.48,.64,.25,.3,.22,.89,.06,.77,.08,.97,.19,.27,.2,.95,.49,.47,.75,.05,.45,.42,.14,.7,.21,.87,.46,.27,.89,.01,.15,.47,.64,.43,.07,.24,.82,.94,.34,.29,.48,.44,.77,.55,.58,.56,.24,.09,.43,.53,.27,.36,.43,.27,.14,.68,.2,.77,.43,.6,.18,.95,.95,.13,.42,.85,.75,.04,.97,.31,.37,.48,.32,.28,.66,.82,.12,.91,.21,.97,.19,.54,.68,0,.84,.37,.52,.02,.41,.18,.99,.92,.38,.36,.37,.01,.29,.66,.86,.11,.56,.02,.6,.85,.17,.15,.7,.33,.6,.51,.09,.21,.9,.6,.09,.66,.25,.31,.42,.24,.44,.13,.02,.05,.62,.32,.22,.62,.05,.06,.84,.17,.41,.33,.27,.2,.15,.98,.11,.23,.72,.65,.07,.7,.44,.45,.45,.03,.86,.31,.29,.42,.8,.94,.11,.8,.4,.26,.57,.16,.49,.78,.24,.2,.69,.37,.41,.72,.72,.45,.55,.9,.1,.58,.19,.21,.67,.35,.56,.11,.56,.02,.54,.9,.31,.56,.57,.74,.08,.21,.01,0,.06,.25,.32,.17,.66,.87,.06,.58,.14,.06,.35,.5,.94,.74,.14,.53,.58,.54,.51,.75,.76,.08,.25,.44,.67,.66,.7,.81,.29,.72,.93,.69,.22,.01,.89,.56,.71,.6,.21,.57,.44,.95,.21,.87,.2,.07,.42,.47,.21,.6,.43,.66,.72,.58,.37,.98,.31,.3,.85,.99,.32,.51,.06,.26,.28,.67,.37,.12,.49,.68,.92,.11,.67,.72,.58,.3,.6,.15,.92,.4,.66,.65,.93,.03,.16,.93,.01,.09,.92,.41,.43,.3,.26,.31,.37,.11,.21,.29,.24,.82,.14,.46,.11,.42,.14,.39,.47,.09,.01,.39,.77,.48,.64,.2,.44,.76,.61,.22,.15,.19,.74,.72,.55,.98,.42,.1,.4,.69,.06,.12,.06,.59,.42,.36,.86,.41,.95,.86,.5,.39,.27,.57,.79,.34,.93,.43,.64,.15,.14,.06,.57,.76,.25,.38,.3,.92,.17,.04,.15,.53,.03,.01,.49,.83,.41,.82,.05,.65,.69,.51,.61,.04,0,.48,.25,.39,.91,.59,.29,.53,.87,.2,.4,.14,.24,.11,.31,.78,.64,.92,.22,.57,.24,.46,.13,.8,.45,.1,.29,.89,.6,.71,.2,.43,.25,.21,.16,.46,.81,.12,.6,.85,.47,.16,.09,.66,.95,.26,.61,.84,.43,.43,.21,.35,.21,.68,.25,.16,.94,.51,.92,.43,.34,0,.69,.6,.15,.01,.66,.06,.54,.78,.43,.95,.37,.81,.03,.53,.48,.16,.94,.22,.39,.61,.52,.65,.16,.64,.35,.96,.58,.88,.59,.35,.61,1,.01,.18,.37,.91,.37,.46,.71,.29,.35,.44,.6,.71,.37,.81,.23,.31,.39,.37,.86,.09,.89,.51,.24,.6,.03,.27,.32,.39,.59,.56,.05,.63,.96,.49,.37,.81,0,.76,.13,.19,.02,.65,.03,.23,.31,.18,.76,.03,.41,.42,.34,.49,.64,.04,.74,.66,.33,.1,.09,.54,.87,.45,.28,.32,.83,0,.39,.56,.96,.09,.95,.8,.21,.76,.56,.49,.39,.01,.77,.39,.2,.81,.68,.29,.17,.69,.38,.3,.87,.21,.18,.23,.43,.05,.35,.69,.67,.73,.04,.34,.19,.75,.04,.44,.05,.94,.05,.69,.14,.71,.4,.21,.38,.19,.02,.74,.48,.11,.19,.78,.49,.65,.38,.55,0,.76,.28,.83,.19,1,.65,.56,.8,.33,.15,.26,.05,.27,.2,.46,.94,.48,.17,.29,.73,.11,.54,.67,.79,.81,.79,.71,.85,.64,.33,.48,.46,.24,.33,.11,.54,.06,.28,.35,.38,.33,.84,.4,.09,.09,.53,.51,.32,.57,.95,.2,.65,.27,.3,.66,.73,.9,.35,.49,.4,.02,.01,.02,.98,.45,.52,.55,.37,.6,.27,.43,.92,.48,.73,.31,.65,.44,.97,.76,.09,.75,.02,.48,.06,.07,.04,.5,.02,.64,.35,.87,.49,.15,.42,.58,.19,.37,.59,.63,.3,.22,0,.46,.84,.74,.4,.82,.87,.32,.7,.99,.34,.12,.56,.55,.15,.04,.03,.95,.99,.34,.46,.43,.27,.19,.23,.48,.52,.01,.43,.24,.22,.49,.1,.03,.16,.91,.71,.16,.79,.79,.68,.89,.88,.13,.05,.55,.33,.77,.61,.83,.18,.6,.01,.63,.2,.87,.05,.96,.23,.29,.48,.55,.3,.37,.35,.74,.56,.2,.87,.98,.22,.12,.45,.83,.91,.34,.43,.33,.99,.27,.04,.05,.03,.44,.43,.1,.6,.02,.03,.41,.96,.69,.19,.88,.22,.08,.39,.15,.55,.74,.8,.09,.47,.54,.46,.03,0,.58,.29,.99,0,.33,.54,.04,.05,.39,.33,.01,.67,.97,.45,.07,.02,.25,.32,.25,.5,.94,.02,.71,.03,.05,.35,.24,.12,.64,.51,.7,.24,.71,.35,.75,.99,.36,.63,.65,.17,.33,.75,.59,.97,.85,.8,.61,.15,.25,.03,.02,.63,.69,.04,.65,.45,.28,.96,.89,.37,.01,.11,.17,.17,.6,.15,.02,.01,.37,.75,.4,.47,.52,.47,.72,.34,.49,.07,.17,.16,.32,.12,.82,.5,.38,.19,.73,.28,.01,0,.29,.87,.29,.21,.85,.29,.95,.49,1,.59,.1,.23,.22,.03,.02,.73,.48,.4,.46,.01,.23,.22,.73,.76,.01,.29,.22,.31,.47,.13,.32,.21,.2,.89,.13,.86,.32,.16,.85,.22,.02,.8,.96,.19,.02,.69,.95,.24,.73,.9,.56,.45,.05,.93,.24,.53,.01,.16,.41,.17,.04,.49,.89,0,.02,.26,.3,.62,.06,.65,.42,.47,.09,.51,.39,.43,.02,.68,.59,.08,.91,.24,.58,.76,.68,.67,.67,.63,.25,.51,.4,.13,.49,.85,.08,.82,.77,.08,.07,.2,.56,.34,.7,.22,.17,.06,.38,.57,.42,.63,.61,.97,.17,.03,.24,.48,.05,.29,.72,.17,.23,.13,.19,.03,.83,.26,.2,.06,.37,.39,.53,.66,.69,.17,.51,.03,.04,.05,.47,.27,.71,.17,.65,.25,.11,.64,.13,.54,.15,.5,.94,.96,.17,.41,.91,.64,.78,.74,.06,.47,.35,.08,.42,.23,.1,.23,.08,.61,.27,.57,.05,.98,.1,.72,.14,.86,.84,.97,.5,.19,.95,.29,.68,.47,.33,.43,.79,.08,.13,.13,.75,.24,.55,.49,.41,.35,.17,.81,.08,.09,.29,.74,.45,.91,.59,.32,.32,.42,.99,.49,.49,.05,.02,.37,.55,.8,.59,.19,.43,0,.44,.85,.91,.73,.18,.08,.08,.11,.35,.55,.29,.5,.5,.12,.48,.69,.92,.09,.07,.23,.06,.8,0,.84,.16,.2,.23,.85,.35,.12,.58,.15,.08,.35,.27,.17,.38,.83,.33,.93,.1,.28,.36,.9,.27,.87,.13,.32,.36,.28,.94,.24,.42,.81,.27,.91,.13,.8,.4,.07,.13,.48,.89,.63,.08,.37,.29,.77,.35,.2,.18,.86,.87,.18,.9,.9,1,.55,.04,.61,.22,.73,.01,.56,.41,.24,.04,.34,.86,.15,.99,.82,.19,.72,.41,.51,.49,.35,.2,.52,.58,.85,.76,.82,.59,.98,.41,.47,.46,.03,.9,.43,.96,.84,.38,.84,.5,.24,.53,.37,.55,.4,.6,.74,.33,.55,.58,.43,.83,0,.34,.59,.95,.17,.83,.04,.49,.3,.65,.22,.52,.31,.73,.65,.65,1,.26,.33,.98,.59,.65,.19,.77,.65,.47,.52,.45,.19,.12,.37,.23,.76,.42,.72,.18,.64,.6,.65,.55,.26,.01,.46,.64,.31,.33,.39,.43,.49,.15,.35,.9,.14,.5,.74,.67,.41,.11,.1,.15,.17,.18,.42,.18,.25,.71,.2,.72,.23,.22,.9,.82,.12,.46,.67,.43,.71,.35,.26,.77,.31,.99,.34,.2,.59,.77,.96,.52,.38,.46,.66,.44,.48,.4,.21,.42,.81,.32,.54,.2,.9,.73,.07,.32,.35,.2,.02,.48,.76,.36,.39,.76,.51,.64,.37,.9,.81,.48,.16,.25,1,.45,.45,.92,.6,.36,.4,.56,.43,.29,.47,.37,.98,.93,.54,.82,.53,.7,.66,.5,.46,.43,.29,.86,.99,.49,.58,.49,.87,.05,.33,.09,.32,.42,.7,.89,.62,.07,.28,.34,.92,.08,.75,.82,.81,.45,.01,.33,.13,.84,.16,.42,.25,.48,.25,.41,.81,.34,.09,.33,.91,.92,.95,.87,.3,.05,.73,.65,.64,.97,.63,.57,.97,.11,.13,.36,.65,.33,.6,.66,.51,.93,.64,.49,.88,.29,.44,.47,.38,.15,.06,.25,.03,.22,.59,.01,.27,.77,.48,.34,.36,.42,.95,.29,.45,.43,.88,.86,.23,.32,.59,.02,.26,.16,.11,.35,.58,.7,.72,.55,.21,.07,.27,.03,.04,.16,.91,.26,.11,.19,.3,.18,.11,.67,.13,.31,.64,.78,.2,.37,.75,.02,0,.26,.63,.13,.22,.38,.53,.53,.56,.17,.19,.34,.47,.02,.97,.28,.78,.3,.67,.62,.99,.51,.63,.21,.1,.18,.11,.44,.21,.07,.82,.92,.73,.23,.39,.58,.58,.3,.13,.57,.14,.04,.7,.64,.13,.35,.02,.28,.21,.18,.32,.12,.07,.65,.67,.63,.14,.01,.41,.56,.4,.28,.06,.03,.67,.58,.92,.03,.06,.58,.78,.42,.16,.39,.19,.5,.06,.75,.78,.61,.08,.54,.38,.76,.3,.13,.94,.15,.07,.02,.91,.3,.49,.39,.64,.41,.95,.51,.64,.29,.06,.04,.76,.07,.49,.35,.38,.12,.56,.84,.7,.77,.6,.03,.83,.14,.92,.95,.12,.67,.81,.22,.53,.37,.24,.97,0,.09,.2,.68,1,.01,.64,.36,.09,.71,.76,.76,.35,.49,.14,.25,.27,.83,.59,.39,.24,.58,.19,.51,.6,.52,.05,.74,.06,.67,0,.25,.86,.43,.81,.74,.24,.77,.64,.34,.48,.1,.31,.26,.3,.76,.79,.85,.39,.44,.15,.55,.54,.45,.1,.59,.12,.8,.72,.52,.41,.46,.38,.99,.47,.28,.38,.38,.26,.54,0,.4,.78,.66,.28,.67,.91,.3,.84,.54,.49,.69,.28,.36,.19,.43,.29,.89,.84,0,.25,.49,.29,.77,.79,.72,.59,.01,.18,.38];export{a as pvalData};
